import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error } = useSignup();
  const handleRegisterNewUser = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };
  return (
    <>
      <div className="container flex justify-center items-center h-[80vh] w-full">
        <div className="w-full max-w-[400px]">
          {error?.msg && (
            <div
              className={`${
                error?.error
                  ? "bg-red-200 text-danger border border-danger rounded-md"
                  : "bg-green-200 text-success border border-success rounded-md"
              } w-full py-3 px-2 my-3`}
            >
              {error?.msg}
            </div>
          )}
          {error?.error && (
            <div className="px-3 py-2 border border-solid border-warning rounded-md my-3">
              Refresh and try again...
            </div>
          )}
          <div className="card">
            <h1 className="text-2xl font-semibold text-center">Signup</h1>
            <hr className="my-5" />
            <form onSubmit={handleRegisterNewUser} className="form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="form-control border border-solid border-orange-400 rounded-md h-10 w-full my-2 px-2 outline-none"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  className="form-control border border-solid border-orange-400 rounded-md h-10 w-full my-2 px-2 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary py-2 rounded-md shadow-md my-3 hover:shadow-md hover:shadow-primary hover:bg-transparent hover:border hover:border-solid hover:border-primary hover:text-primary text-white duration-300"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
