import React from "react";
import SearchBar from "./SearchBar";
import CategoriesTab from "./CategoriesTab";
import TopPostsTab from "./TopPostsTab";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <SearchBar />
      <CategoriesTab />
      <TopPostsTab />
    </div>
  );
};

export default Sidebar;
