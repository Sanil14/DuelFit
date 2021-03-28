import React from 'react'
import Countdown from 'react-countdown';
import { useHistory } from 'react-router-dom'

const GameScreen3 = () => {
  let history = useHistory();
  const timerEndHandler = () => {
    history.push("/gs4")
  }
  return (
    <section className="h-screen bg-gray-900">
      <div className=" h-4/6 text-white flex flex-col justify-center items-center">
        <div className="py-5">
          <h className="text-4xl">Take a Breather!</h>
        </div>
        <div className="bg-green-400 w-3/12 h-28 text-white top-10 relative mx-10  flex justify-center items-center text-3xl">
          <Countdown date={Date.now() + 15000} onComplete={timerEndHandler}>
            <h>GO!</h>
          </Countdown>
        </div>
      </div>
      <div className=" h-2/6 text-white flex flex-col justify-center items-center">
        <div className="bg-blue-400 w-5/12 h-2/6 flex flex-col justify-center items-center" >
          <h className="text-2xl">Tip: Dont forget to hydrate yourself!</h>
        </div>
      </div>


    </section>
  )
}

export default GameScreen3
