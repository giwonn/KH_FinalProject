import React from "react";
export const Container = ({ children }) => (
  <div className="container mx-auto px-2 my-7 min-h-screen max-w-screen-md rounded">
    <div className="flex flex-col">
      <div className="bg-white shadow-md rounded-3xl p-5">{children}</div>
    </div>
  </div>
);
export const Form = ({ children }) => (
  <div className="mt-5">
    <div className="form">
      <div className="md:space-y-2 mb-3">{children}</div>
    </div>
  </div>
);
export const Row = ({ children }) => (
  <div className="md:flex flex-row md:space-x-4 w-full text-xs">{children}</div>
);
export const Box = ({ children, label, required }) => (
  <div className="mb-3 space-y-2 w-full text-xs">
    <label className="font-semibold text-gray-600 py-2">
      {label} {required && <abbr title="required">*</abbr>}
    </label>
    {children}
  </div>
);
