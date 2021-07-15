import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = ({ logout }) => {
  return (
    // <div>
    //   <ul className="flex items-stretch container rounded-full mx-auto bg-black text-yellow-600">
    //     <li className="active:bg-green-700">
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li className="px-12">
    //       <NavLink to="/feed">feed</NavLink>
    //     </li>
    //     <li className="px-8 text-blue-400">
    //       <NavLink to="/search">search</NavLink>
    //     </li>
    //     <li className="px-8">
    //       <NavLink to="/mystudy">my study</NavLink>
    //     </li>
    //     <li className="px-12">
    //       <NavLink to="/">
    //         <button onClick={logout}>Logout</button>
    //       </NavLink>
    //     </li>
    //   </ul>
    // </div>
    <nav className="bg-white shadow-lg">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 md:text-3xl">
            <a href="/">
              <img src="./../src/img/logo.png" width="150px" />
            </a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className="hidden"
                  d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                />
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row hidden md:block -mx-2">
          <NavLink
            exact
            to="/"
            className="text-gray-800 rounded hover:bg-gray-100 hover:text-gray-300 hover:font-medium py-2 px-2 md:mx-2"
          >
            Feed
          </NavLink>
          <NavLink
            to="/search/offline"
            className="text-gray-800 rounded hover:bg-gray-100 hover:text-gray-300 hover:font-medium py-2 px-2 md:mx-2"
          >
            search
          </NavLink>
          <NavLink
            to="/mystudy"
            className="text-gray-800 rounded hover:bg-gray-100 hover:text-gray-300 hover:font-medium py-2 px-2 md:mx-2"
          >
            mystudy
          </NavLink>
          <NavLink
            to="/myprofile"
            className="text-gray-800 rounded hover:bg-gray-100 hover:text-gray-300 hover:font-medium py-2 px-2 md:mx-2"
          >
            update profile
          </NavLink>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
