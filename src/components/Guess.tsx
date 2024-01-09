import React from "react";

type Guess = {
  word: string;
};

const correct = 'bg-[#6AAA64]'
const almost = 'bg-[#CEB02C]'
const normal = 'bg-[#939b9f29]'

export default function Guess({ word }: Guess) {
  return (
    <div className="flex gap-2">
      {word.split("").map((letter, index) => (
        <div
          key={index}
          className={`w-[60px] h-[59px] text-2xl  ${normal} flex justify-center items-center rounded-md capitalize font-futura font-extrabold text-white`}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}
