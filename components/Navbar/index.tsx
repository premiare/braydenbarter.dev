import React from "react";

type Props = {};

export const Navbar = (props: Props) => {
  return (
    <div
      className="flex justify-around py-4 bg-black/30
            backdrop-blur-sm shadow-md w-full
            fixed top-0 left-0 right-0 z-10 border-b border-gray-500"
    >
      <div className="flex items-center space-between w-full mx-auto">
        This is a Navbar
        <a>test 1</a>
        <a>test 1</a>
        <a>test 1</a>
        <a>test 1</a>
      </div>
    </div>
  );
};

export default Navbar;
