import React from 'react'
import Countdown from 'react-countdown';

const GameScreen1 = () => {
  return (
    <section className="h-screen bg-gray-900">
      <div className="flex flex-row justify-around h-6/12">
        <div className="bg-yellow-600 w-3/12 h-28 text-white top-10 relative mx-10 p- flex justify-center items-center">
          <h className="text-3xl">Workout Type</h>
        </div>
        <div className="bg-green-400 w-3/12 h-28 text-white top-10 relative mx-10 p- flex justify-center items-center text-3xl">
          <Countdown date={Date.now() + 15000}>
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
    </section>
  )
}

export default GameScreen1
