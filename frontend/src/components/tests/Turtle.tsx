import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { turtles } from '@/lib/data/turtle';
import { ITurtle } from '@/lib/types';
import styles from '@/styles/components/Landing.module.scss';

const colors = [
  '#FE5F55',
  '#FC440F',
  '#736AAF',
  '#955392',
  '#A43D69',
  '#CA3CFF',
  '#002E3D',
  '#C6ECAE',
  '#01BAEF',
  '#1F01B9',
  '#457EBB',
  '#1B9AAA',
  '#324B4F',
  '#55BF81',
  '#20BF55',
  '#B4E33D',
];

const strokeColors = ['#2E2C2C', '#000000'];

const Turtle = () => {
  const [fillColor, setFillColor] = useState('');

  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <svg
        width='680'
        height='680'
        viewBox='0 0 680 680'
        fill='#FBFBFF'
        xmlns='http://www.w3.org/2000/svg'
      >
        {turtles.map((turtle: ITurtle) => (
          <path
            key={turtle.id}
            d={turtle.d}
            stroke={turtle.strokeColor}
            fill={turtle.fillColor}
            stroke-width='5'
            stroke-linecap='round'
          />
        ))}
      </svg>
    </motion.div>
  )
};

export default Turtle;
