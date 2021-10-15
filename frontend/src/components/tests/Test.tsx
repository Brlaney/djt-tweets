import { motion } from 'framer-motion';
import {
  // stagger,
  // fadeInUp,
  mainPathVariant,
  shapeVariations,
} from '@/lib/config/animations/svgs/svgs';

import { IBubble } from '@/lib/types';
import { bubbles } from '@/lib/data/anim';

import styles from '@/styles/components/Test.module.scss';

const usRed = '#BF0A30';
const usBlue = '#002868';

const Test = ({}) => {
  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <svg
        width='1000'
        height='1000'
        viewBox='0 0 1000 1000'
        fill='none'
      >
        <g id='bubbles'>
          {bubbles.map((bubble: IBubble) => (
            <motion.circle
              key={bubble.id}
              id='{bubble.id}'
              cx={bubble.cx}
              cy={bubble.cy}
              r={bubble.r}
              fill={bubble.fill}
              {...shapeVariations}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.99]
                },
              }}
              initial={{ y: 60, opacity: 0 }}
              layout
            />
          ))}
        </g>
      </svg>
    </motion.div>
  )
};

export default Test;
