import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

/*=======components and pages======== */
import Navmenu from "./components/Navmenu";
import useAuth from "./hooks/useAuth";
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
        <Route path="/blog/:id" element={<ReadBlog />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
