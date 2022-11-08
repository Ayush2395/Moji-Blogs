import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleLoginUser = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <div className="container h-screen flex justify-center items-center">
        <div className="container w-96 p-5 card shadow-md">
          <h1 className="text-3xl text-center">Login</h1>
          <hr className="my-3" />
          <form onSubmit={handleLoginUser}>
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
              value="Login"
              className="py-2 px-3 w-full bg-green-500 rounded-md text-white shadow-md cursor-pointer mb-3"
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

export default Login;
