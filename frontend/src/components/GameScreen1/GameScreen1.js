import React from 'react'
import Countdown from 'react-countdown';
import { useHistory } from 'react-router-dom'

const GameScreen1 = () => {
  let history = useHistory();
  const timerEndHandler = () => {
    history.push("/gs2")
  }
  return (
    <section className="h-screen bg-gray-900">
      <div className="flex flex-row justify-around h-6/12">
        <div className="bg-yellow-400 w-3/12 h-28 text-white top-10 relative mx-10 p- flex flex-col justify-evenly items-center">
          <h className="text-xl">Quick Duel</h>
          <h className="text-xl">Get Ready!</h>
        </div>
        <div className="bg-green-400 w-3/12 h-28 text-white top-10 relative mx-10 p- flex justify-center items-center text-3xl">
          <Countdown date={Date.now() + 15000} onComplete={timerEndHandler}>
            <h>GO!</h>
          </Countdown>
        </div>
      </div>
      <div className="flex flex-row h-6/12">
        <div className="bg-blue-300 w-4/12 mx-40 my-40 flex flex-col justify-center text-center text-2xl py-5">
          <h className="text-3xl ">You</h>
          <div className="w-6/12 h-32 self-center bg-gray-200 my-10">
            <h>Image</h>
          </div>
          <ul>
            <li>Games Played: x</li>
            <li>Points Won: y</li>
            <li>Calories Burned: y</li>
          </ul>
        </div>
        <div className="bg-blue-300 w-4/12 mx-40 my-40 flex flex-col justify-center text-center text-2xl py-5">
          <h className="text-3xl ">Opponent</h>
          <div className="w-6/12 h-32 self-center bg-gray-200 my-10">
            <h>Image</h>
          </div>
          <ul>
            <li>Games Played: x</li>
            <li>Points Won: y</li>
            <li>Calories Burned: y</li>
          </ul>
        </div>
      </div>
      <div className="bg-yellow-400 h-10 flex flex-col justify-center items-center absolute bottom-0 right-96 mr-10 px-5"  >
        <h className="text-2xl">Use this time to ready yourself in front of your camera.</h>
      </div>
    </section>
  )
}

export default GameScreen1
