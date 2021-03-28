import React, { useState } from 'react'
import userService from '../../services/userService';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  })
  let history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const onSubmitClick = async (e) => {
    e.preventDefault();
    console.log(state);
    await userService.loginAccount(state.email, state.password);
    const response = await userService.getProfile();
    console.log(response);
    if (response.success) {
      history.push("/main")
    }
  }
  return (
    <section className="bg-gray-900 text-gray-200 body-font flex flex-col justify-center items-center h-screen">
      <h className="text-4xl">Log in to your account!</h>
      <div className="bg-gray-50 w-4/12 h-2/6 my-10 text-black">
        <form className="flex flex-col py-10 px-20">
          <label className="mt-0">Your Email</label>
          <input className="w-11/12 mt-4 " type="email" value={state.email} id="email" onChange={handleChange} placeholder="Enter your email"></input>
          <label className="mt-3">Your Password</label>
          <input className="w-11/12 mt-4 " type="password" value={state.password} id="password" onChange={handleChange} placeholder="Enter your password"></input>
          <button type="submit" onClick={onSubmitClick} class="inline-flex text-white mt-4 bg-indigo-500 border-0 my-5py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-4/12 self-center text-lg">Log In</button>
        </form>
      </div>
    </section>
  )
}

export default Login
