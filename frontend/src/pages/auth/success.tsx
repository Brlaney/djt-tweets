import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BiLike } from 'react-icons/bi';
import Loading from '@/components/Loading';
import { fadeInUp } from '@/lib/config/animations/svgs/loading';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Success.module.scss';

const Success = () => {
  const [progress, setProgress] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const x = Math.floor(Math.random() * (max - min + 1) + min)
    return x
  };

  /* If: the progress bar is completely filled.
  Then: set the show animation state to true.
  Otherwise, the loop continues. Then: set the 
  show animation state to true */
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {

        if (oldProgress === 100) {
          setShowAnimation(true)

          return 0
        }
        const duration = getRandomInt(2, 7)
        const diff = Math.random() + duration * 2.5

        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  /* If showAnimation state is true, the following is displayed otherwise,
  this portion is skipped until the loading comp is complete */
  if (showAnimation) {
    return (
      <motion.div
        className={styles.container}
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
        layout
      >
        <Box
          className={styles.box}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            className={styles.avatar}
            sx={{ m: 1, bgcolor: '#002868' }}
          >
            <BiLike color='white' size='1.3rem' />
          </Avatar>
          <Typography
            className={styles.title}
            component='h1'
            variant='h5'
            color='text.primary'
          >
            Successfully logged in
          </Typography>
          <Box className={styles.inner}>
            <Link href='/'>
              <Button
                className={styles.button}
                variant='contained'
                color='primary'
              >
                Homepage
              </Button>
            </Link>
            <Link href='/tweets'>
              <Button
                className={styles.button}
                variant='contained'
                color='secondary'
              >
                View Tweets
              </Button>
            </Link>
          </Box>
        </Box>
      </motion.div>
    )
  };

  return <Loading progress={progress} />;
};

export default Success;
