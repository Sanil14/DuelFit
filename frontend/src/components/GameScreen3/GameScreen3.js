import React from 'react'

const GameScreen3 = () => {
  return (
    <section className="h-screen bg-gray-900">
        <div className="flex flex-row h-3/6  justify-evenly">
      <div className="box-border border-yellow-700 h-32 w-32 p-4 border-4 bg-yellow-200 w-3/12 self-center h-2/6 mx-10 flex flex-row justify-center align-center">
        <h>Timer</h>
        </div>
      </div>
      <div className="flex flex-row h-3/6  justify-evenly">
      <div className="box-border border-yellow-300 h-32 w-32 p-4 border-4 bg-yellow-200 w-6/12 self-center h-1/6 mx-10 flex flex-row justify-centre align-center">
        <h className="text-2xl">Tips</h>
        </div>
      </div>
    </section>
  )
}

export default GameScreen3
