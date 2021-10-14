import * as React from 'react';
import { motion } from 'framer-motion';

// import { stagger, fadeInUp } from '@/lib/config/animations/svgs/staggered';
// import info from '@/lib/data/info';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Landing from '@/components/Landing';
import styles from '@/styles/Home.module.scss';

const Index = () => {
  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
      layout
    >
      {/* Header */}
      <Paper className={styles.header} elevation={0}>
        <Typography
          className={styles.title}
          variant='h1'
          component='h1'
          gutterBottom
        >
          The State of Our Union
        </Typography>
      </Paper>
      <Landing />
    </motion.div>
  )
};

export default Index;
