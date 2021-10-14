import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import info from '@/lib/data/info';
import styles from '@/styles/Home.module.scss';

import Landing from '@/components/Landing';

const Index = () => {

  return (
    <>
      <Container className={styles.container}>
        <Box className={styles.box}>

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

          {/* Main content */}
          <Box className={styles.svgContainer}>
            <Landing />
          </Box>

        </Box>
      </Container>
    </>
  );
}

export default Index;
