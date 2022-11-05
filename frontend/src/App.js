import React from "react";
import { Route, Routes } from "react-router-dom";

/*==========Components and pages======== */
import Navmenu from "./components/Navmenu";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import ReadBlog from "./pages/ReadBlog";

const App = () => {
  return (
    <>
      <Navmenu />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<ReadBlog />} />
      </Routes>
    </>
  );
};

export default App;
