import React from "react";
import { NavLink } from "react-router-dom";
import {
  BiHomeSmile,
  BiUserCircle,
  BiLeftArrow,
  BiLogInCircle,
  BiUserPlus,
  BiLogOutCircle,
  BiEditAlt,
} from "react-icons/bi";
import useAuth from "../hooks/useAuth";

const Navbar = ({ open, setOpen }) => {
  const { user, dispatch } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
  };
  return (
    <>
      <div
        className={`flex bg-dark h-screen p-5 ${
          open ? "w-72" : "w-20"
        } sticky top-0 flex-col text-white duration-300`}
      >
        <div className="logo">
          <img
            className="inline w-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
            alt="oreo"
          />
          <span className={`text-2xl ${!open && "hidden"}`}>Moji Blog</span>
          <BiLeftArrow
            onClick={() => setOpen(!open)}
            className={`absolute -right-5 bg-white text-4xl rounded-full p-1 text-dark border-2 border-solid border-warning cursor-pointer duration-300 ${
              !open && "rotate-180"
            }`}
          />
        </div>
        <ul className="menu_list text-xl my-6 py-3 font-semibold flex flex-col justify-around h-52">
          {user && (
            <li className="menu_item">
              <NavLink to="/" className="flex items-center space-x-3">
                <BiHomeSmile className="inline" />
                <span className={`${!open && "hidden"}`}>Home</span>
              </NavLink>
            </li>
          )}
          {user && (
            <li className="menu_item">
              <NavLink
                to="/create-blog"
                className="flex items-center space-x-3"
              >
                <BiEditAlt className="inline" />
                <span className={`${!open && "hidden"}`}>Create Blog</span>
              </NavLink>
            </li>
          )}
          {user && (
            <li className="menu_item hover:cursor-pointer">
              <button
                onClick={handleLogout}
                to="/create-blog"
                className="flex items-center space-x-3"
              >
                <BiLogOutCircle className="inline" />
                <span className={`${!open && "hidden"}`}>Logout</span>
              </button>
            </li>
          )}
          {!user && (
            <li className="menu_item">
              <NavLink to="/login" className="flex items-center space-x-3">
                <BiLogInCircle className="inline" />
                <span className={`${!open && "hidden"}`}>Login</span>
              </NavLink>
            </li>
          )}
          {!user && (
            <li className="menu_item">
              <NavLink to="/signup" className="flex items-center space-x-3">
                <BiUserPlus className="inline" />
                <span className={`${!open && "hidden"}`}>Signup</span>
              </NavLink>
            </li>
          )}
        </ul>
        {user && (
          <div className="user-detail self-start space-x-3">
            <BiUserCircle className="inline p-0.5 bg-white text-dark rounded-full text-2xl" />
            <span className={`${!open && "hidden"}`}>{user.email}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
