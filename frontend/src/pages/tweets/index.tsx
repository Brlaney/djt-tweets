import * as React from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { server } from '@/lib/config/endpoints';
import { ITweet } from '@/lib/types';
import styles from '@/styles/Tweets.module.scss';

const Tweets = ({ tweets }:
  InferGetStaticPropsType<typeof getStaticProps>) => {
  const [tweetList] = React.useState(tweets);

  return (
    <>
      <Container className={styles.container}>
        <Box className={styles.box}>

          {/* Main content | Trump's most influential tweets */}
          {tweetList.map((tweet: ITweet) => (
            <Card key={tweet.id} className={styles.card}>
              <CardContent className={styles.content}>
                <Typography
                  className={styles.tweet}
                  variant='h5'
                  component='div'
                >
                  {tweet.tweet}
                </Typography>
                <Typography
                  className={styles.timestamp}
                  color='text.secondary'
                  gutterBottom
                >
                  Date: <Typography
                    className={styles.span}
                    component='span'
                    color='primary'
                  > {tweet.date}
                  </Typography>
                  <br />
                  Time: <Typography
                    className={styles.span}
                    component='span'
                    color='primary'> {tweet.time}
                  </Typography>
                </Typography>

                <Grid
                  className={styles.grid}
                  container
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <Grid className={styles.item} item xs={4}>
                    <Typography className={styles.meta} variant='body2'>
                      Likes: <Typography
                        className={styles.spanMeta}
                        color='secondary'
                        component='span'> {tweet.likes}</Typography>
                    </Typography>
                  </Grid>
                  <Grid className={styles.item} item xs={4}>
                    <Typography className={styles.meta} variant='body2'>
                      Retweets: <Typography
                        className={styles.spanMeta}
                        color='secondary'
                        component='span'> {tweet.retweets}</Typography>
                    </Typography>
                  </Grid>
                  <Grid className={styles.item} item xs={4}>
                    <Typography className={styles.meta} variant='body2'>
                      Replies: <Typography
                        className={styles.spanMeta}
                        color='secondary'
                        component='span'> {tweet.replies}</Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>

              <CardActions className={styles.actions}>
                <Link href={`/tweets/details/${tweet.id}`}>
                  <Button
                    className={styles.details}
                    color='secondary'
                    size='small'
                  >
                    Details
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${server}/tweets`;
  const res = await fetch(endpoint);
  const tweets: ITweet[] = await res.json();

  return {
    props: {
      tweets
    }
  }
};

export default Tweets;

