import * as React from 'react';
import { motion } from 'framer-motion';
import Turtle from '@/components/tests/Turtle';
import styles from '@/styles/pages/Test.module.scss';

const Tests = () => {
  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      <motion.div className={styles.testanimation}>
        <Turtle />
      </motion.div>
    </motion.div>
  )
};

export default Tests;
