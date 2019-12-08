import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange, value }) => {
  return (
    <input
      className="search"
      placeholder={placeholder}
      type="text"
      // value={value}
      onChange={handleChange}
    />
  );
};
