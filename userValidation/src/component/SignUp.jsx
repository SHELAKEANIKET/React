import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/signup",{email,password})
    .then(res => {
      console.log(res);
      navigate('/')
    })
    .catch(err => console.log(err))
  
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen mx-2">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
          Sign Up
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="email"
              className="w-full border border-slate-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full border border-slate-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-slate-100 font-medium text-lg py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
          <div className="mt-3">
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
