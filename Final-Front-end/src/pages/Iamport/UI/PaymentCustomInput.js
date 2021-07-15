import React from "react";

export const PaymentCustomInput = ({ id, title, content, onchange, readonly = false }) => {
  return (
    <>
      <div className="">
        <label htmlFor={id} className="text-md text-gray-600">
          {title}
        </label>
      </div>
      <div className="">
        <input type="text" autoComplete="off"
          className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
          id={id}
          name={id}
          value={content}
          readOnly={readonly}
          onChange={!!onchange ? onchange : undefined}
        />
      </div>
    </>
  );
};
