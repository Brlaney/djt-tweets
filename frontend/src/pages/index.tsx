import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { server } from '@/lib/config/endpoints';
import { ICount } from '@/lib/types';
import styles from '@/styles/Home.module.scss';

const Index = ({ count }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [tweetCount] = React.useState(count);

  return (
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
            Welcome, to Donald's Tweets
          </Typography>
          <Typography
            className={styles.subtitle}
            variant='h5' color='text.secondary'
            component='h2'
            gutterBottom
          >
            An app that explores the Donald J. Trump's most influential tweets
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
            The total number of influential tweets contained in the database:
            <span color='secondary' className={styles.span}> {tweetCount}</span>
          </Typography>
        </Paper>

      </Box>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${server}/tweets/count`;
  const res = await fetch(endpoint);
  const count: ICount[] = await res.json();

  return {
    props: {
      count
    }
  }
};

export default Index;

