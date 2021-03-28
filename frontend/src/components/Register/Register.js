import React, { useState } from 'react'
import userService from '../../services/userService';

const Register = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    weight: "",
    height: "",
    fitness: ""
  })
  const [moreRegister, setMoreRegister] = useState(false);
  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }
  const onSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.repassword) {
      setMoreRegister(true);
    } else {
      alert("Passwords dont match :(")
    }
  }
  const onFinishClick = async (e) => {
    e.preventDefault();
    const data = {
      name: state.name,
      email: state.email,
      password: state.password,
      weight: state.weight,
      height: state.height,
      fitness: state.fitness
    }
    console.log(await userService.createUserAccount(data));
  }
  return (
    <>
      {!moreRegister && (
        <section className="bg-gray-900 text-gray-200 body-font flex flex-col justify-center items-center h-screen">
          <h className="text-4xl">Register Your DuelFit Account!</h>
          <div className="bg-gray-50 w-4/12 h-104 my-10 text-black">
            <form className="flex flex-col py-10 px-20" id="registration-form">
              <label>Your Name</label>
              <input className="w-11/12 mt-4 " type="text" id="name" value={state.name} onChange={handleChange} placeholder="Enter your full name"></input>
              <label className="mt-3">Your Email</label>
              <input className="w-11/12 mt-4 " type="email" id="email" value={state.email} onChange={handleChange} placeholder="Enter your email"></input>
              <label className="mt-3">Your Password</label>
              <input className="w-11/12 mt-4 " type="password" id="password" value={state.password} onChange={handleChange} placeholder="Enter your password"></input>
              <label className="mt-3">Re-type Password</label>
              <input className="w-11/12 mt-4 " type="password" id="repassword" value={state.repassword} onChange={handleChange} placeholder="Re-enter your password"></input>
              <button type="submit" onClick={onSubmitClick} class="inline-flex text-white mt-6 bg-indigo-500 border-0  py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-4/12 self-center text-lg">Sign Up</button>
            </form>
          </div>
        </section>
      )}
      {moreRegister && (
        <section className="bg-gray-900 text-gray-200 body-font flex flex-col justify-center items-center h-screen">
          <h className="text-4xl">Tell us more about yourself</h>
          <h className="text-xl mt-2 text-gray-300">Dont be shy, we promise to keep it confidential!</h>
          <div className="bg-gray-50 w-4/12 h-3/6 my-10 text-black">
            <form className="flex flex-col pt-14 px-20">
              <label className="mt-3">Your Weight (in kg)</label>
              <input className="w-11/12 mt-4 " type="number" id="weight" value={state.weight} onChange={handleChange} placeholder="Enter your weight in kg"></input>
              <label className="mt-3">Your Height (in cm)</label>
              <input className="w-11/12 mt-4 " type="number" id="height" value={state.height} onChange={handleChange} placeholder="Enter your height in cm"></input>
              <label className="mt-3">Your Fitness Experience</label>
              <select id="fitness" value={state.fitness} onChange={handleChange} >
                <option value="beginner">Newbie - never worked out before</option>
                <option value="amateur">Amateur - been to the gym once or twice</option>
                <option value="expert">Expert - I workout almost everyday</option>
                <option value="veteran">Veteran - I snort protein powder and dumbell grease</option>
              </select>
              <button type="submit" onClick={onFinishClick} class="inline-flex text-white mt-8 bg-indigo-500 border-0 my-5 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-4/12 pl-8 self-center text-lg">Finish!</button>
            </form>
          </div>
        </section>
      )}
    </>


  )
}

export default Register
