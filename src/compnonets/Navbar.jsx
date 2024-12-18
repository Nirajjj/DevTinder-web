import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { BASE_URL, DEFAULT_AVATAR } from "../utils/constants";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  // console.log(user.photoUrl);

  const dispatch = useDispatch();
  const logoutUser = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    user && (
      <div className="navbar bg-base-300 h-20">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            TechMate
          </Link>
        </div>
        {user && (
          <div className="flex-none gap-2 mr-5">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoUrl || DEFAULT_AVATAR}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/connections"}>Connections</Link>
                </li>
                <li>
                  <Link to={"/requests"}>Requests</Link>
                </li>
                <li>
                  <Link onClick={logoutUser} to={"/login"}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Navbar;
