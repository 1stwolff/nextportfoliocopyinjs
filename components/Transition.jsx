"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TransitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <div>
      <motion.div
        className="fixed top-0 h-screen w-screen right-full z-[30] bg-[#d36b25]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 h-screen w-screen right-full z-[20] bg-[#23ada6]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 h-screen w-screen right-full z-[10] bg-[#377e92]"
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed right-55 top-40 z-[35]"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >
        <Image
          src="/Animation-Owl1.gif"
          alt="bird waving"
          height={300}
          width={300}
        />
      </motion.div>
    </div>
  );
};

export default Transition;
