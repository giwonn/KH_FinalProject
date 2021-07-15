import React from "react";
export const Container = ({ children }) => (
  <main className="bg-gray-100 dark:bg-gray-800 relative h-screen overflow-hidden relative">
    <div className="container mx-auto max-w-screen-lg my-8">{children}</div>
  </main>
);
export const Input = ({ value, placeholder, onChange }) => (
  <input
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
    placeholder="Enter some tags"
  />
);
export const Button = ({ onClick, text }) => (
  <button
    onClick={onClick}
    type="button"
    class="bg-green-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-green-600 transition duration-200 each-in-out"
  >
    {text}
  </button>
);
