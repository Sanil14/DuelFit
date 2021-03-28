import React from 'react'

const GameScreen4 = () => {
  return (
    <section className="h-screen bg-gray-900">
      <div className="flex flex-row h-3/6  justify-evenly">
      <div className="bg-blue-400 w-6/12 self-center h-4/6 mx-10 flex flex-row justify-center align-center">
          <h className="text-6xl py-8">Winner</h>
        </div>
      </div>
      <div className="flex flex-row h-3/6  justify-evenly">
        <div className="bg-gray-400 w-4/12 self-center h-5/6 mx-10">
          <h>POINTS BREAKDOWN: </h>
        </div>
        <div className="bg-yellow-100 w-6/12 self-center h-5/6 mx-10 flex flex-col align-center">
        <div className="bg-yellow-500 ">
        <h className="text-3xl">You:</h>
        </div>
        <div className="bg-yellow-500 my-32">
        <h className="text-3xl pb-4">Opponent:</h>  
        </div>
        </div>
        <div className="bg-gray-400 w-4/12 self-center h-5/6 mx-10">
          <h>Calories Burnt: </h>
        </div>
      </div>

    </section>
  )
}

export default GameScreen4
