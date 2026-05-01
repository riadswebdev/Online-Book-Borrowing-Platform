"use client";

import toast from "react-hot-toast";


const BorrowButton = () => {
  const handleBorrowButton = () => {
    toast.success("borrow");
  };

  return (
    <>
      <button
        onClick={handleBorrowButton}
        className="mt-10 bg-linear-to-r from-blue-300 to-blue-800 cursor-pointer p-3 rounded-md text-gray-200 font-semibold"
      >
        Borrow
      </button>
      
    </>
  );
};

export default BorrowButton;
