import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/lib/config/themes/theme';
import createEmotionCache from '@/lib/config/cache/createEmotionCache';
import '@/styles/globals.scss';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='Twitter, Donald Trump, Tweets, President Trump, API, Strapi, Endpoints, React, Next.js'
        />
        <meta
          name='description'
          content='Next.js frontend web app that fetches Donald Trumps most popular tweets'
        />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <title>Strapi | Next</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};
