import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {balance, count} = useSelector(state => state.states);

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <span className="btn btn-ghost normal-case text-xl" >daisy Bank</span>
        </div>
        <div className="flex-none">
          <button className="btn btn-primary mr-3">
            Count : {count}
          </button>
          <button className="btn btn-primary">
            Your balance : {balance}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
