import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-16 bg-white">
      <div>BlogX</div>
      <div className="flex items-center justify-center gap-4">
        <div>Home</div>
        <div>Blogs</div>
        <div className="cursor-pointer">Write a Blog </div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Navbar;
