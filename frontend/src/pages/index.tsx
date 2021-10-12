import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import info from '@/lib/data/info';
import styles from '@/styles/Home.module.scss';

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
              Welcome, to this website
            </Typography>
          </Paper>

          {/* Main content */}
          <Paper elevation={0} className={styles.homecontent}>
            <Typography
              color='inherit'
              className={styles.count}
              variant='body1'
              component='h3'
            >
              Number of influential tweets:
              <Typography
                color='secondary'
                component='span'
                className={styles.span}> {info.tweetCount}</Typography>
            </Typography>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  {info.username}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default Index;
