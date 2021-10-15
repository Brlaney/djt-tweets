import * as React from 'react';
import { motion } from 'framer-motion';
// import { stagger, fadeInUp } from '@/lib/config/animations/svgs/staggered';
import Box from '@mui/material/Box';
import Test from '@/components/tests/Test';
import { IBubble } from '@/lib/types';
import styles from '@/styles/pages/Home.module.scss';

const Tests = () => {
  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >

      {/* Test animation container (Box) */}
      <motion.div className={styles.testanimation}>
        <Test />
      </motion.div>
    </motion.div>
  )
};

export default Tests;
