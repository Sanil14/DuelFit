import React, { useRef, useEffect, useState } from 'react'
import { ReactMediaRecorder } from "react-media-recorder";
import Countdown from 'react-countdown';

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
  const [mediaBlob, setMediaBlob] = useState(null);
  const [blobData, setBlobData] = useState(null);
  const [timerStatus, setTimerStatus] = useState('on');
  const timerRef = useRef()
  const recStart = useRef();
  const recEnd = useRef();


  const handleStart = () => {
    timerRef.current.start();
    recStart.current.click();
  }

  const handleEnd = () => {
    recEnd.current.click();
  }
  useEffect(() => {
    if (timerStatus === "on") {
      handleStart();
    }
    else if (timerStatus === "done") {
      handleEnd();
    }
  })


  useEffect(async () => {
    if (mediaBlob) {
      const text = new Blob([mediaBlob], { 'type': 'video / mp4' });
      setBlobData(await text.arrayBuffer());
    }
  }, [mediaBlob])

  return (
    <section className="bg-gray-900 w-12/12 h-screen">
      <div className="flex flex-row justify-around">
        <div className="bg-yellow-600 w-2/12 h-16 text-white top-10 relative mx-10 p- flex justify-center items-center">
          <h className="text-3xl">Workout Name</h>
        </div>
        <div className="bg-green-400 w-2/12 h-16 text-white top-10 relative mx-10 p- flex justify-center items-center text-3xl">
          <Countdown ref={timerRef} date={Date.now() + 5000} autoStart={false} onComplete={() => setTimerStatus('done')}>
            <h>Take a rest!</h>
          </Countdown>
        </div>
      </div>

      <ReactMediaRecorder
        video
        render={
          ({ status, startRecording, stopRecording, mediaBlobUrl, previewStream }) => {
            setMediaBlob(mediaBlobUrl);
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
      />
      <div className=" flex flex-row justify-center">
        <h className="text-white w-12/12">Make sure to stay at the centre of the camera.</h>
      </div>

    </section>
  )
}

export default GameScreen2;
