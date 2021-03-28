import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import userService from '../../services/userService'


const MainMenu = () => {
  const [userName, setUserName] = useState(null)
  useEffect(async () => {
    const response = await userService.getProfile();
    setUserName(response.name);
  })
  return (
    <section className="bg-gray-900 h-screen border-separate ">
      <NavBar />
      <div className=" w-max pt-24 text-gray-200 px-24">
        <h className="text-xl my-5">The Leaderboard</h>
        <table class="table-auto border-white border-2 ">
          <thead>
            <th class="w-1/6 px-1 py-1 border-white border-2">Position</th>
            <th class="w-4/6 px-1 py-1 border-white border-2">Name</th>
            <th class="w-1/6 px-1 py-1 border-white border-2">Cals</th>
          </thead>
          <tbody>
            <tr>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">1</td>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">Aryan Dominic</td>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">19,812</td>
            </tr>
            <tr>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">2</td>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">Rohit Gomez</td>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">18,871</td>
            </tr>
            <tr>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">3</td>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">Auti Emmu</td>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">16,123</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='text-white w-max ml-24 my-10 p-5 flex flex-col'>
        <h className="text-3xl">Welcome, {userName ? userName : "Player"}</h>
        <h className="text-xl pt-5">Your Cals: 9081</h>
        <h className="text-xl pt-5">Your Position on the leaderboard: 15th</h>
      </div>
      <Link to="/find">
        <div className="bg-blue-500 right-0 absolute top-48 p-12 mr-20">
          <h class="text-5xl text-white py-10 p-24">DUEL</h>
        </div>
      </Link>

      <div className="bg-yellow-400 right-0 absolute bottom-60 px-0 py-12 mr-20">
        <h class="text-5xl text-white py-10 p-24">PRACTICE</h>
      </div>
    </section >
  )
}

export default MainMenu
