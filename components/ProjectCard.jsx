"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ image, title, text }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className='relative w-[450px] h-[280px] rounded-md cursor-pointer perspective'
    >
      <motion.div
        className='relative w-full h-full transition-transform transform-style preserve-3d'
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='absolute backface-hidden w-full h-full bg-cover bg-center text-white rounded-lg p-4'
        >
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
          <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
            Learn more &gt;
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className='absolute backface-hidden w-full h-full bg-cover bg-center text-white rounded-lg p-4 transform rotateY-180'
        >
          <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]' />
          <div className='flex flex-col gap-20 py-3 z-[30]'>
            <h1 className='text-white text-2xl font-semibold'>{title}</h1>
            <p className='text-gray-200 text-[20px]'>
              {text}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
