import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
const Dropdown = ({ links }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(prev => !prev);
  }
  const location = useLocation();

  return (
    <div className=" my-3">
      <button
        type="button"
        className="relative bg-indigo-500 text-gray-200 rounded-lg px-4 text-sm py-1 overflow-hidden focus:outline-none focus:border-white"
        onClick={handleClick}>
        <div className="flex">
          <span>{location.pathname.split('/')[2]}</span>
          <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M7 10l5 5 5-5z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
        </div>
      </button>
      {open && (
        <div className="absolute w-48 z-40 bg-white rounded-lg shadow-xl" onClick={handleClick}>
          {links.map(link => <Link
            to={link.path}
            key={link.key}
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" >{link.title}</Link>
          )}

        </div>
      )}
    </div>
  )
}

export default Dropdown
