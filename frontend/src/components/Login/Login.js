import React from 'react'

const Login = () => {
  return (
    <section className="bg-gray-900 text-gray-200 body-font flex flex-col justify-center items-center h-screen">
      <h className="text-4xl">Log in to your account!</h>
      <div className="bg-gray-50 w-4/12 h-2/6 my-10 text-black">
        <form className="flex flex-col py-10 px-20">
          <label className="mt-0">Your Email</label>
          <input className="w-11/12 mt-4 " type="email" name="email" placeholder="Enter your email"></input>
          <label className="mt-3">Your Password</label>
          <input className="w-11/12 mt-4 " type="password" name="password" placeholder="Enter your password"></input>
          <button class="inline-flex text-white mt-4 bg-indigo-500 border-0 my-5py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-4/12 self-center text-lg">Log In</button>
        </form>
      </div>
    </section>
  )
}

export default Login
