import React from "react";

const TextInput = ({ handleChange }) => {
  return (
    <div className="input-container">
      <i className="fa fa-search icon"></i>
      <input
        onChange={handleChange}
        className="search"
        type="text"
        placeholder="type to search"
      />
    </div>
  );
};

export default TextInput;
