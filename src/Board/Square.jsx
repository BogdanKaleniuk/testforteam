import React from "react";
import "../styles.css";

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-500 float-left text-[24px] font-bold leading-[34px] h-[34px] mr-[-1px] mt-[-1px] p-0 text-center w-[34px] cursor-pointer border-lime-400	"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
