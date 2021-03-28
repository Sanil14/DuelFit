import React, { useRef, useEffect, useState } from 'react'
import { ReactMediaRecorder } from "react-media-recorder";
import Countdown from 'react-countdown';
import userService from "../../services/userService"
import { auth } from '../../services/firebase-auth';
import { useHistory } from 'react-router-dom'

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} width={1400} height={800} autoPlay />;
};

const GameScreen2 = () => {

  let history = useHistory();
  const [mediaBlob, setMediaBlob] = useState(null);
  const [timerStatus, setTimerStatus] = useState('on');
  const timerRef = useRef();
  const recStart = useRef();
  const recEnd = useRef();
  const [reps, setReps] = useState(null);

  const handleStart = () => {
    timerRef.current.start();
    recStart.current.click();
  }

  const handleEnd = () => {
    recEnd.current.click();
    history.push({ pathname: "/gs4", state: { reps } })
  }
  useEffect(() => {
    if (timerStatus === "on") {
      handleStart();
    }
    else if (timerStatus === "done") {
      handleEnd();
    }
  })

  useEffect(() => {
    console.log(auth().currentUser)
  }, [])


  useEffect(async () => {
    if (mediaBlob) {
      const videoFile = new File([mediaBlob], "video.mp4", { type: "video/mp4" });
      const resp = await userService.uploadExercise(videoFile);
      setReps(resp.reps);
    }
  }, [mediaBlob])

  return (
    <section className="bg-gray-900 w-12/12 h-screen">
      <div className="flex flex-row justify-around">
        <div className="bg-yellow-600 w-2/12 h-16 text-white top-10 relative mx-10 p- flex justify-center items-center">
          <h className="text-3xl">Workout Name</h>
        </div>
        <div className="bg-green-400 w-2/12 h-16 text-white top-10 relative mx-10 p- flex justify-center items-center text-3xl">
          <Countdown ref={timerRef} date={Date.now() + 15000} autoStart={false} onComplete={() => setTimerStatus('done')}>
            <h>Take a rest!</h>
          </Countdown>
        </div>
      </div>

      <ReactMediaRecorder
        video
        render={
          ({ status, startRecording, stopRecording, mediaBlobUrl, previewStream }) => {
            return (
              <div className="w-12/12 flex flex-col items-center">
                <h>{status}</h>
                <button ref={recStart} onClick={startRecording}>Start Recording</button>
                <button ref={recEnd} onClick={stopRecording}>Stop Recording</button>
                <div className="w-6/12 bg-black self-center">
                  <VideoPreview stream={previewStream} />
                </div>
                <a className="text-black">{mediaBlobUrl}</a>
              </div>
            );
          }}
        onStop={(blobURL, blob) => setMediaBlob(blob)}
      />
      <div className=" flex flex-row justify-center">
        <h className="text-white w-12/12">Make sure to place yourself within the rectangle.</h>
      </div>
      <div></div>
      <div className="border-black border-2 w-3/12 h-4/6 absolute top-36 mr-48 right-1/4 ">
      </div>

    </section>
  )
}

export default GameScreen2;
