type Guess = {
  word: string;
  result: string[];
  active: boolean;
  valid?: boolean;
};

export default function Guess({ word, result, active, valid }: Guess) {
  word = word.padEnd(5);
  return (
    <div className=" guess flex gap-2">
      {word.split("").map((letter, index) => (
        <div
          key={index}
          className={`w-[60px] ${letter !== " " ? "filled" : ""}  h-[59px] ${
            !valid ? "text-red-400 border-red-400" : "text-white"
          }  ${active ? "border-2 border-[#abafb129]" : ""} text-2xl ${
            result[index]
          } bg-[#939b9f29] flex justify-center items-center rounded-md capitalize font-futura font-extrabold `}
        >
          {letter}
        </div>
      ))}
    </div>
  );
}
