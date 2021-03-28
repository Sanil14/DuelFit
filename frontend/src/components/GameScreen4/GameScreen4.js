import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar';

const GameScreen4 = () => {
  const [reps, setReps] = useState(19);
  const [total, setTotal] = useState(0);
  const totalCounter = () => {
    let total2 = 250 + 80 + 100 + (reps * 10);
    setTotal(total2);
  }
  useEffect(() => {
    totalCounter();
  }, [])

  return (
    <section className="h-screen bg-gray-900">
      <NavBar />
      <div className="flex flex-row h-2/6  justify-evenly">
        <div className="box-border border-yellow-600  p-2 border-4 bg-yellow-400 w-6/12 self-center h-2/6 mx-10 flex flex-row justify-around align-center">
          <h className="text-5xl">Winner:</h>
          <h className="text-5xl">You</h>
        </div>
      </div>
      <div className="flex flex-row h-3/6  justify-evenly">
        <div className="box-border border-blue-300  p-4 border-4 bg-gray-100 w-4/12 self-center h-5/6 mx-10 flex flex-col">
          <h className="text-3xl">Cals Breakdown: </h>
          <div className="flex flex-col py-10">
            <h className="text-lg ">Victory - 250</h>
            <h className="text-lg pt-4">Play Streak - 80</h>
            <h className="text-lg pt-4">Win Streak - 100</h>
            <h className="text-lg pt-4">Reps - 190</h>
            <h className="text-xl pt-4">Total - {total}</h>
          </div>

        </div>
        <div className="box-border border-yellow-300  p-4 border-4 bg-yellow-100 w-4/12 self-center h-5/6 mx-10 flex flex-col align-center">
          <h className="text-3xl">You:</h>
          <div className="pt-4">
            <h className="text-lg">Reps Completed - {reps}</h>
          </div>
          <div className="py-16">
            <h className="text-3xl ">Opponent:</h>
            <div className="pt-4">
              <h className="text-lg">Reps Completed - 19</h>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default GameScreen4
