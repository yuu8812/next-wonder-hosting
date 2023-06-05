import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetWindowSize } from '../hooks/GetWindowSize';
import { NextConfig } from 'next';

const App = ({ Component, pageProps }: NextConfig) => {
  const router = useRouter();
  const { width } = GetWindowSize();
  useEffect(() => {
    if (!width) return;
    if (router.route === '/kitarubeki') return;
    if (width > 1000) {
      router.push('/pc');
    } else {
      router.push('/mobile');
    }
  }, [width]);
  return (
    <ChakraProvider>
      <Head>
        <title>世界ずっとWONDER</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Googleで検索してもわからない、不思議なモノ・コトに出会いたい。誰のためでもない、あなたがつくる、あなたの物語を発信するインディーズのメディアラボです。"
        />
        <link rel="shortcut icon" href="/wonderTitle2.png" />
      </Head>
      <Box
        sx={{
          fontFamily: 'a-otf-gothic-mb101-pr6n,sans-serif',
          fontStyle: 'normal',
          fontWeight: '400px',
        }}
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

export default App;
