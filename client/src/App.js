import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

/*=======components and pages======== */
// import Footer from "./components/Footer";
import Navmenu from "./components/Navmenu";
import useAuth from "./hooks/useAuth";
import useDarkMode from "./hooks/useDarkMode";
import CreateBlogs from "./pages/CreateBlogs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import ReadBlog from "./pages/ReadBlog";
import Signup from "./pages/Signup";

const App = () => {
  const { user } = useAuth();
  const { darkMode } = useDarkMode();
  return (
    <>
      <div
        className={` grid grid-cols-4 gap-x-6
          ${darkMode ? "bg-slate-700 text-white" : "bg-white text-slate-800"}
        `}
      >
        <div className="col-span-1 w-72 bg-red-500">
          <Navmenu />
        </div>
        <div className="app-routes col-span-3 px-5">
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
            <Route
              path="/blog/:id"
              element={user ? <ReadBlog /> : <Navigate to="/login" />}
            />
            <Route
              path="/create-blogs"
              element={user ? <CreateBlogs /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default App;
