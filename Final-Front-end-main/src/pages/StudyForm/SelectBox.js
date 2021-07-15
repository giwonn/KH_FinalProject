import React from "react";

const SelectBox = ({ options, value, onChange, isRequired = true }) => {
  return (
    <select
      className="block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
      required={isRequired}
      value={value}
      onChange={onChange}
    >
      {options.map((opt) => (
        <option value={opt.value} key={opt.key}>
          {opt.name}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
