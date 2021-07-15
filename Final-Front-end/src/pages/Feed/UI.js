import React from "react";

export const Container = ({ children }) => (
  <main className="bg-blue-200 dark:bg-blue-200 relative min-h-screen overflow-hidden relative">
    <div className="container mx-auto max-w-screen-lg my-8">{children}</div>
  </main>
);

export const Card = ({ content }) => (
  <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
    <div class="flex-1 flex justify-between items-center">
      <div class="w-full p-0.5 pl-1 mr-2 rounded">
        <p className="text-sm font-light text-gray-500">{content}</p>
      </div>
    </div>
  </div>
);
export const Bar = ({ username }) => (
  <div className="flex-1 flex flex-col">
    <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
      <ul className="flex items-center">
        <li className="h-6 w-6"></li>
      </ul>

      <ul className="flex items-center">
        <li>
          <h1 className="pl-8 lg:pl-0 text-gray-700">
            {username}의 피드 입니다.{" "}
          </h1>
        </li>
      </ul>
      <ul className="flex items-center">
        <li className="pr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </li>
        <li className="h-10 w-10">
          <img
            className="h-full w-full rounded-full mx-auto"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="profile woman"
          />
        </li>
      </ul>
    </nav>
  </div>
);
