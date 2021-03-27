import React from 'react'

const LaterRegister = () => {
  return (
    <section className="bg-gray-900 text-gray-200 body-font flex flex-col justify-center items-center h-screen">
      <h className="text-4xl">Tell us about yourself</h>
      <h className="text-xl mt-2 text-gray-300">Dont be shy, we promise to keep it confidential!</h>
      <div className="bg-gray-50 w-4/12 h-3/6 my-10 text-black">
        <form className="flex flex-col pt-14 px-20">
          <label className="mt-3">Your Weight (in kg)</label>
          <input className="w-11/12 mt-4 " type="text" name="weight" placeholder="Enter your weight in kg"></input>
          <label className="mt-3">Your Height (in cm)</label>
          <input className="w-11/12 mt-4 " type="text" name="height" placeholder="Enter your height in cm"></input>
          <label className="mt-3">Your Fitness Experience</label>
          <select id="cars" name="cars">
            <option value="beginner">Newbie - never worked out before</option>
            <option value="intermediate">Amateur - been to the gym but have commitment issues</option>
            <option value="expert">Expert - I workout almost everyday</option>
            <option value="veteran">Veteran - I snort protein powder and dumbell grease</option>
          </select>
          <button class="inline-flex text-white mt-8 bg-indigo-500 border-0 my-5py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-4/12 pl-8 self-center text-lg">Finish!</button>
        </form>
      </div>
    </section>
  )
}

export default LaterRegister
