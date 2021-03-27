import React from 'react'
import NavBar from '../NavBar/NavBar'

const MainMenu = () => {
  return (
    <section className="bg-gray-900 h-screen border-separate ">
      <NavBar />
      <div className=" w-max h-3 /6 pt-24 text-gray-200 px-24">
        <h className="text-xl my-5">The Leaderboard</h>
        <table class="table-auto border-white border-2 ">
          <thead>
            <th class="w-1/6 px-1 py-1 border-white border-2">Position</th>
            <th class="w-5/6 px-1 py-1 border-white border-2">Name</th>
          </thead>
          <tbody>
            <tr>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">1</td>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">Aryan</td>
            </tr>
            <tr>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">2</td>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">Austin</td>
            </tr>
            <tr>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">3</td>
              <td class="w-1/6 text-center px-1 py-1 border-white border-2">Evelyn</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-green-400 right-0 absolute top-48 p-12 mr-20">
        <h class="text-5xl text-white py-10 p-24">DUEL</h>
      </div>
      <div className="bg-blue-300 right-0 absolute bottom-60 px-0 py-12 mr-20">
        <h class="text-5xl text-white py-10 p-24">PRACTICE</h>
      </div>
    </section >
  )
}

export default MainMenu
