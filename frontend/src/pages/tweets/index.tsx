import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { BiLike, BiShare, BiReplyAll } from 'react-icons/bi';
import styles from '@/styles/pages/Tweets.module.scss';

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
                <Grid
                  className={styles.tweetGrid}
                  container
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  spacing={2}
                  sx={{
                    mb: 4,
                  }}
                >
                  <Grid item xs={3}>
                    <Image
                      alt='trump-icon'
                      src='/trump_icon.png'
                      className={styles.trumpIcon}
                      width={98.4}
                      height={100}
                      layout='responsive'
                    />
                  </Grid>
                  <Grid item xs={8} sx={{ mx: 2 }}>
                    <Typography
                      className={styles.tweet}
                      variant='h6'
                      component='div'
                    >
                      {tweet.tweet}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  className={styles.grid}
                  container
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                  spacing={3}
                  sx={{ borderTop: '1px solid #a5a5a5', }}
                >
                  <Grid
                    className={styles.item}
                    item xs={3}
                    sx={{
                      width: '250px',
                      border: '1px solid #a5a5a5',
                      borderRadius: '6px',
                      py: 1,
                      m: 1,
                      textAlign: 'center'
                    }}
                  >
                    <Typography
                      className={styles.meta}
                      variant='body2'
                      sx={{ fontSize: '1rem' }}
                    >
                      <BiLike
                        className={styles.likes}
                        color='primary'
                        size='1.5rem'
                      />
                      <Typography
                        className={styles.spanMeta}
                        color='secondary'
                        component='span'
                        sx={{ fontSize: '1rem' }}
                      >{tweet.likes} </Typography>
                      likes
                    </Typography>
                  </Grid>
                  <Grid
                    className={styles.item}
                    item xs={4}
                    sx={{
                      width: '250px',
                      border: '1px solid #a5a5a5',
                      borderRadius: '6px',
                      py: 1,
                      m: 1,
                      textAlign: 'center'
                    }}
                  >
                    <Typography className={styles.meta} variant='body2'>
                      <BiShare
                        className={styles.share}
                        color='secondary'
                        size='1.5rem'
                      />
                      <Typography
                        className={styles.spanMeta}
                        color='secondary'
                        component='span'>{tweet.retweets} </Typography>
                      retweets
                    </Typography>
                  </Grid>
                  <Grid
                    className={styles.item}
                    item xs={3}
                    sx={{
                      width: '250px',
                      border: '1px solid #a5a5a5',
                      borderRadius: '6px',
                      py: 1,
                      m: 1,
                      textAlign: 'center'
                    }}
                  >
                    <Typography className={styles.meta} variant='body2'>
                      <BiReplyAll
                        className={styles.replyAll}
                        color='primary'
                        size='1.5rem'
                      />
                      <Typography
                        className={styles.spanMeta}
                        color='secondary'
                        component='span'>{tweet.replies} </Typography>
                      replies
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
