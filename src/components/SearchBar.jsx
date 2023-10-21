"use client";
import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    alert(searchTerm);
  };
  return (
    <div className="px-4 py-2 rounded-full bg-white flex items-center justify-between">
      <div>
        <input
          className="outline-none"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div onClick={handleSearch}>
        <BiSearch />
      </div>
    </div>
  );
};

export default SearchBar;
