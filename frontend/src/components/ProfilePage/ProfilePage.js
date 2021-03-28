import React from 'react'

const ProfilePage = () => {
  return (
    <section className="h-screen bg-gray-900">
        <div className="flex flex-row h-5/6  justify-evenly align-centre">
        <div className="box-border border-blue-600 h-32 w-32 p-4 border-4 bg-blue-400 w-4/12 self-center h-5/6 mx-10 flex flex-row">
          <h className="text-2xl ">LeaderBoard Postion</h>
        </div>
        <div className="box-border border-green-600 h-32 w-32 p-4 border-4 bg-green-200 w-4/12 self-center h-5/6 mx-10 flex flex-col ">
          <h className="text-2xl ">Data Stats</h>
          <ul className="list-disc list-inside">
              <li>Name:</li>
              <li>Email</li>
              <li>Age</li>
              <li>Height</li>
              <li>Weight</li>
              <li>Total Calories Burnt</li>
            </ul>
        </div>
        <div className="box-border border-blue-600 h-32 w-32 p-4 border-4 bg-blue-400 w-4/12 self-center h-5/6 mx-10 flex flex-col">
          <h className="text-2xl">Match History</h>
          <li>Total Games Played</li>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage