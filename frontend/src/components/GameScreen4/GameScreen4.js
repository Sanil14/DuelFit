import React from 'react'

const GameScreen4 = () => {
  return (
    <section className="h-screen bg-gray-900">
      <div className="flex flex-row h-3/6  justify-evenly">
      <div className="box-border border-yellow-600 h-32 w-32 p-4 border-4 bg-yellow-400 w-6/12 self-center h-4/6 mx-10 flex flex-row justify-center align-center">
          <h className="text-6xl">Winner</h>
        </div>
      </div>
      <div className="flex flex-row h-3/6  justify-evenly">
        <div className="box-border border-blue-300 h-32 w-32 p-4 border-4 bg-gray-100 w-4/12 self-center h-5/6 mx-10">          
          <h className="text-3xl">Points Breakdown: </h>
        </div>
        <div className="box-border border-yellow-300 h-32 w-32 p-4 border-4 bg-yellow-100 w-6/12 self-center h-5/6 mx-10 flex flex-col align-center">       
        <h className="text-3xl">You:</h>
        <div className="my-32">
        <h className="text-3xl ">Opponent:</h>  
        </div>
        </div>
        <div className="box-border border-blue-300 h-32 w-32 p-4 border-4 bg-gray-100 w-4/12 self-center h-5/6 mx-10 flex flex-col">
          <h className="text-3xl ">Calories Burnt:</h>
        <div className="my-32">
          <h className="text-3xl ">Total Time Spent:</h>
        </div>
        </div>
        
      </div>

    </section>
  )
}

export default GameScreen4
