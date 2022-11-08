import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import useLogout from "../hooks/useLogout";
import {
  BiRightArrow,
  BiHomeSmile,
  BiLockAlt,
  BiUserCircle,
  BiEditAlt,
  BiExit,
} from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Navmenu = () => {
  const [open, setOpen] = useState(true);

  const { user } = useAuth();
  const { logout } = useLogout();

  return (
    <>
      <div
        className={`flex px-6 flex-col py-8 justify-between ${
          open ? "w-72" : "w-20"
        } h-screen sticky top-0 bg-slate-800 text-white duration-300 z-10`}
      >
        <div>
          <div className="logo w-full mb-14">
            <Link to="/" className="flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
                alt="logo"
                width={30}
              />
              <p className={`text-3xl ${open ? "visible" : "hidden "}`}>
                Moji Blog
              </p>
            </Link>
            <div
              onClick={() => setOpen(!open)}
              className={`toggler text-slate-500 flex justify-center items-center p-2 border border-solid border-slate-600 bg-white absolute -right-5 hover:cursor-pointer h-10 w-10 rounded-full duration-300 ${
                open ? "rotate-0" : "rotate-180"
              }`}
            >
              <BiRightArrow size="35px" />
            </div>
          </div>
          <ul className="menu_list">
            <li className="nav-item mb-14">
              <NavLink
                to="/"
                className="flex space-x-2 items-center text-2xl relative"
              >
                <BiHomeSmile />
                <span className={`${open ? "visible" : "hidden"} duration-300`}>
                  Home
                </span>
              </NavLink>
            </li>
            {!user && (
              <li className="nav-item mb-14">
                <NavLink
                  to="/login"
                  className="flex space-x-2 items-center text-2xl relative"
                >
                  <BiLockAlt />
                  <span
                    className={`${open ? "visible" : "hidden"} duration-300`}
                  >
                    Login
                  </span>
                </NavLink>
              </li>
            )}
            {!user && (
              <li className="nav-item mb-14">
                <NavLink
                  to="/signup"
                  className="flex space-x-2 items-center text-2xl relative"
                >
                  <BiUserCircle />
                  <span
                    className={`${open ? "visible" : "hidden"} duration-300`}
                  >
                    Signup
                  </span>
                </NavLink>
              </li>
            )}
            {user && (
              <li className="nav-item mb-14">
                <NavLink
                  to="/create-blogs"
                  className="flex space-x-2 items-center text-2xl relative"
                >
                  <BiEditAlt />
                  <span
                    className={`${open ? "visible" : "hidden"} duration-300`}
                  >
                    Create Blogs
                  </span>
                </NavLink>
              </li>
            )}
            {user && (
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-2xl relative"
              >
                <BiExit />
                <span className={`${open ? "visible" : "hidden"} duration-300`}>
                  Logout
                </span>
              </button>
            )}
          </ul>
        </div>

        {user && (
          <div>
            <MdOutlineAlternateEmail className="inline bg-white p-1 rounded-full text-slate-800 text-3xl mr-2" />
            <span className={open ? "visible" : "hidden"}>{user.email}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Navmenu;
