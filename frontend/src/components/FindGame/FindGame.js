import React from 'react'

const FindGame = () => {
  return (
    <section className="bg-gray-900 h-screen flex flex-col">
      <h className="mt-5 text-4xl text-white text-center self-center">Choose your workout</h>
      <div className="flex flex-row w-12/12  justify-evenly my-16">
        <div className="bg-blue-400 w-3/12 mx-20 flex flex-col px-6 py-5 rounded">
          <h className="text-3xl ">Quick Duel</h>
          <h className="text-xl pb-3">2 workouts - 1m30s</h>
          <div>
            <h>Workouts in Rotation:</h>
            <ul className="list-disc list-inside">
              <li>Jumping Jacks</li>
              <li>Squats</li>
              <li>Push Ups</li>
              <li>Crunches</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-400 w-3/12 mx-20 flex flex-col px-6 py-5 rounded">
          <h className="text-3xl ">Extreme Duel</h>
          <h className="text-xl pb-3">5 workouts - 4m30s</h>
          <div>
            <h>Workouts in Rotation:</h>
            <ul className="list-disc list-inside">
              <li>Jumping Jacks</li>
              <li>Squats</li>
              <li>Push Ups</li>
              <li>Crunches</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-3/6  justify-evenly">
        <div className="bg-gray-400 w-4/12 self-center h-3/6 mx-10">
          <h>Loading Animation</h>
        </div>
        <div className="bg-gray-700 w-2/12 self-center h-2/6 mx-10 flex flex-row justify-center align-center">
          <h className="text-3xl py-8">Find Match</h>
        </div>
        <div className="bg-gray-400 w-4/12 self-center h-3/6 mx-10">
          <h>Timer</h>
        </div>
      </div>

    </section >
  )
}

export default FindGame
