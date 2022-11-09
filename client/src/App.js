import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Signup from "./pages/Signup";

const App = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  return (
    <>
      <div className="flex h-full w-full">
        <div className="sidebar sticky top-0">
          <Navbar open={open} setOpen={setOpen} />
        </div>
        <div className="main w-full px-10 py-5">
          <Routes>
            <Route path="*" element={<Page404 />} />
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
