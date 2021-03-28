import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/LOGO.png'

const NavBar = () => {
  return (
    <header class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/main">
          <a className="flex flow-row items-center">
            <img className="w-16" src={Image} />
            <span class="ml-3 text-xl">DuelFit</span>
          </a>
        </Link>

        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-white">Help</a>
          <a class="mr-5 hover:text-white">Settings</a>

        </nav>
        <Link to="/login">
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Logout
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>

      </div>
    </header >
  )
}

export default NavBar
