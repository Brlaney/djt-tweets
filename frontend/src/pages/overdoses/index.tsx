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
import { IRow } from '@/lib/types';
// import { BiLike, BiShare, BiReplyAll } from 'react-icons/bi';
import styles from '@/styles/pages/Tweets.module.scss';

const Overdoses = ({ rows }:
  InferGetStaticPropsType<typeof getStaticProps>) => {
  const [rowList] = React.useState(rows);

  return (
    <>
      <Container className={styles.container}>
        <Box className={styles.box}>

          {rowList.map((row: IRow) => (
            <Card key={row.location} className={styles.card} sx={{ backgroundColor: 'white', }}>
              <CardContent className={styles.content}>
                <Grid
                  className={styles.grid}
                  container
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  spacing={2}
                >
                  <Grid item xs={6}>
                    <Typography
                      className={styles.data}
                      variant='h6'
                      component='div'
                    >
                      Age-adjusted death rate: {row.rate}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                  <Typography
                      className={styles.data}
                      variant='h6'
                      component='div'
                    >
                      Number of deaths: {row.deaths}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async _context => {
  const endpoint = `${server}/overdoses`;
  const res = await fetch(endpoint);
  const rows: IRow[] = await res.json();

  return {
    props: {
      rows
    }
  }
};

export default Overdoses;
