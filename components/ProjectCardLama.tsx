"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
}

const ProjectCardLama = ({ image, title, text }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div onClick={handleFlip} className="w-[450px] h-[280px] perspective-1000">
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{ transformStyle: "preserve-3d" }}
      >
          <div
          className="absolute w-full h-full backface-hidden bg-cover bg-center rounded-lg group-hover:scale-110 transition-transform duration-500 ease-in-out"
          style={{ backgroundImage: `url(${image})` }}
          >
          <div className="absolute inset-0 w-full h-full bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 rounded-md" />
          <div className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-[20px] pb-10 opacity-0 hover:opacity-100 transition-opacity duration-300">
          Learn More &gt;
          </div>
          </div>
          <div
            className="absolute w-full h-full backface-hidden bg-black bg-opacity-50 text-white rounded-lg p-4 flex flex-col justify-center items-center gap-5 py-3 group-hover:scale-110 transition-transform duration-500 ease-in-out"
            style={{ transform: "rotateY(180deg)" }}
          >
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[14px]">{text}</p>
          </div>
      </motion.div>
    </div>
  );
};

export default ProjectCardLama;
