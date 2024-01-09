import React from "react";

const querty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

export default function KeyBoard() {
  return (
    <div className="w-[480px] gap-2 bg-[#dadce008] rounded-[15px] p-3 flex flex-col items-center">
      <div className="flex gap-2">
        {querty[0].split("").map((letter, index) => (
          <div
            key={index}
            className="bg-[#565F7E] w-[38px] h-[43px] text-white text-md font-semibold capitalize flex justify-center items-center rounded-[4px]"
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {querty[1].split("").map((letter, index) => (
          <div
            className="bg-[#565F7E] w-[38px] h-[43px] text-white text-md font-semibold capitalize flex justify-center items-center rounded-[4px]"
            key={index}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="bg-[#565F7E] h-[43px] text-white text-sm font-[500] px-2 capitalize flex justify-center items-center rounded-[4px]">
          ENTER
        </div>
        {querty[2].split("").map((letter, index) => (
          <div
            className="bg-[#565F7E] w-[38px] h-[43px] text-white text-md font-semibold capitalize flex justify-center items-center rounded-[4px]"
            key={index}
          >
            {letter}
          </div>
        ))}
        <div className="bg-[#565F7E] h-[43px] text-white text-sm font-[500] px-2 capitalize flex justify-center items-center rounded-[4px]">
          DELETE
        </div>
      </div>
    </div>
  );
}
