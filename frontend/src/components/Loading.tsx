import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { motion } from 'framer-motion';
import styles from '@/styles/components/Loading.module.scss';

export default function Loading({progress}) {
  return (
    <>
      <Box className={styles.box}>
        <div className={styles.animationContainer}>
          <motion.div
            className={styles.animation}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, -120, 270, 360, 0],
              borderRadius: ['30%', '20%', '50%', '80%', '20%']
            }}
            transition={{
              duration: 2.85,
              ease: 'easeInOut',
              times: [0, 0.35, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 0
            }}
            variants={{
              initial: { y: '-100%' },
              animate: { y: '45%' }
            }}
          />
          <Box className={styles.innerBox}>
            <LinearProgress
              variant='determinate'
              color='primary'
              value={progress}
            />
          </Box>
        </div>
      </Box>
    </>
  )
};
