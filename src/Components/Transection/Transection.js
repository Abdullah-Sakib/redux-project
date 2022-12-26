import React from "react";
import { useDispatch } from "react-redux";

const Transection = () => {
  const dispatch = useDispatch();
  const handleDiposit = () =>{
    dispatch({
      type: "diposit",
      payload: 1000
    })
  };
  const handleWithdraw = () =>{
   dispatch({
    type: 'withdraw',
    payload: 1000
   })
  };
  const handleIncreaseCount = () => {
   dispatch({
    type: "increase",
    payload: 20,
   })
  };
  const handleDecreaseCount = () => {
    dispatch({
      type: "decrease",
      payload: 20
    })
  }
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div>
        <button
          className="btn btn-square btn-success text-2xl"
          onClick={handleDiposit}
        >
          +
        </button>
        <span className="text-xl mx-4"> Update Balance</span>
        <button
          className="btn btn-square btn-success text-2xl"
          onClick={handleWithdraw}
        >
          -
        </button>
      </div>
      <div className="ml-5">
        <button
          className="btn btn-square btn-success text-2xl"
          onClick={handleIncreaseCount}
        >
          +
        </button>
        <span className="text-xl mx-4"> Update count</span>
        <button
          className="btn btn-square btn-success text-2xl"
          onClick={handleDecreaseCount}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Transection;
