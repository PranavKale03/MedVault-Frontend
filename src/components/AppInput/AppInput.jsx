import React, { useState } from "react";

const AppInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (props.onInputChange) {
      onInputChange(newValue);
    }
  };

  return (
    <div className="flex flex-col justify-start items-start">
      <label className="block mb-2 text-md font-medium text-gray-900 dark:text-black">
        {props.label}
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default AppInput;
