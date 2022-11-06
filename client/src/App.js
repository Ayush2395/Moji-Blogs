import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

/*=======components and pages======== */
// import Footer from "./components/Footer";
import Navmenu from "./components/Navmenu";
import useAuth from "./hooks/useAuth";
import CreateBlogs from "./pages/CreateBlogs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import ReadBlog from "./pages/ReadBlog";
import Signup from "./pages/Signup";

const App = () => {
  const { user } = useAuth();
  return (
    <>
      <Navmenu />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
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
      {/* <Footer /> */}
    </>
  );
};

export default App;
