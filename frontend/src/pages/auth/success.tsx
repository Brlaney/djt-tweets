import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Loading from '@/components/Loading';
import Redirect from '@/components/Redirect';
import { fadeInUp } from '@/lib/config/animations/svgs/loading';
import { motion } from 'framer-motion';
import styles from '@/styles/pages/Success.module.scss';

export default function Success() {
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

  const [shouldRedirectCreate, setShouldRedirectCreate] = useState(false);
  const [shouldRedirectDirectory, setShouldRedirectDirectory] = useState(false);

  if (shouldRedirectCreate) {
    return <Redirect to='/create' />
  };

  if (shouldRedirectDirectory) {
    return <Redirect to='/directory' />
  };

  /* If showAnimation state is true, the following is displayed otherwise,
  this portion is skipped until the loading comp is complete */
  if (showAnimation) {
    return (
      <>
        <Box className={styles.box}>
          <div className={styles.animationContainer}>

            <Card className={styles.card} elevation={4}>
              <CardContent className={styles.cardContent}>

                <Typography className={styles.title} variant='h2' component='h2'>
                  Success!
                </Typography>
                <Typography variant='body2' component='div' className={styles.body}>
                  Your lead has been manually entered into the
                  database. You will now be able to find this entry in the
                  <strong> directory</strong> link located on the above
                  navbar. Thanks for your submission.
                </Typography>
              </CardContent>

              {/* Bottom card action buttons stagger animation */}
              <CardActions className={styles.cardActions}>
                <motion.div
                  className={styles.cardDiv}
                  initial='visible'
                  exit={{ opacity: 0 }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    className={styles.button}
                    variant='contained'
                    color='secondary'
                    size='large'
                    onClick={() => setShouldRedirectCreate(true)}
                  >
                    Add more
                  </Button>
                </motion.div>
                <motion.div
                  className={styles.cardDiv}
                  initial='visible'
                  exit={{ opacity: 0 }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    className={styles.button}
                    variant='contained'
                    size='large'
                    onClick={() => setShouldRedirectDirectory(true)}
                  >
                    View
                  </Button>
                </motion.div>
                <motion.div
                  className={styles.cardDiv}
                  initial='visible'
                  exit={{ opacity: 0 }}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link className={styles.link} href='/' underline='hover'>
                    Homepage
                  </Link>
                </motion.div>
              </CardActions>
            </Card>
          </div>
        </Box>
      </>
    )
  };

  return <Loading progress={progress} />;
};
