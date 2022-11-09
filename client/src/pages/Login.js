import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();

  const handleLoginUser = async (e) => {
    e.preventDefault();
    await login(email, password);
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
            <h1 className="text-2xl font-semibold text-center">Login</h1>
            <hr className="my-5" />
            <form onSubmit={handleLoginUser} className="form">
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
                disabled={error.error}
                type="submit"
                className="w-full bg-primary py-2 rounded-md shadow-md my-3 hover:shadow-md hover:shadow-primary hover:bg-transparent hover:border hover:border-solid hover:border-primary hover:text-primary text-white duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
