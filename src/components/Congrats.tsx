import { motion } from "framer-motion";
import image from "../assets/award.png";
import { useAppSelector } from "../hooks/hooks";
export default function Congrats() {
  const game = useAppSelector((state) => state.game);

  return (
    <div className="absolute flex justify-center items-center inset-0 bg-[#000000af]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          delay: 0.1,
          duration: 0.2,
        }}
        className="w-[300px] h-[500px] flex-col items-center justify-center flex relative gap-5 bg-[#181c27] shadow-xl rounded-xl"
      >
        <h1 className="text-3xl font-extrabold text-white ">
          Congratulations !!!
        </h1>
        <p className="text-[#6AAA64] font-extrabold text-3xl">
          {game.answer.toLocaleUpperCase()}
        </p>
        <p className="text-white">
          You found the solution in {6 - game.gussesLeft} guesses
        </p>
        <img src={image} className="w-[150px] h-auto" alt="" />
        <h1 className="text-3xl font-extrabold text-white ">You Win!</h1>
        <button
          onClick={() => {
            location.reload();
          }}
          className="bg-[#6AAA64] text-white font-bold text-2xl w-[200px] h-[50px] rounded-md"
        >
          Play Again
        </button>
      </motion.div>
    </div>
  );
}
