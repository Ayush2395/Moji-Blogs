import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSignupUser = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <>
      <div className="container h-screen flex justify-center items-center">
        <div className="container w-96 p-5 card shadow-md">
          <h1 className="text-3xl text-center">Signup</h1>
          <hr className="my-3" />
          <form onSubmit={handleSignupUser}>
            <div className="form-group mb-5">
              <label htmlFor="email" className="form-label block">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="px-2 form-control border border-solid border-slate-500 rounded-md h-10 w-full"
                id="email"
              />
            </div>
            <div className="form-group mb-5">
              <label htmlFor="password" className="form-label block">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="px-2 form-control border border-solid border-slate-500 rounded-md h-10 w-full"
                id="password"
              />
            </div>
            <input
              disabled={isLoading}
              type="submit"
              value="Signup"
              className={`py-2 px-3 w-full bg-${
                isLoading ? "red-400" : "green-500"
              } rounded-md text-white shadow-lg hover:bg-green-400 cursor-pointer mb-3 duration-300`}
            />
          </form>
          {error && (
            <div className="error w-full bg-red-200 text-red-600 py-3 px-2 rounded-md border border-solid border-red-500">
              {error}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
