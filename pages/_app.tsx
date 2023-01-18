import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { GetWindowSize } from '../hooks/GetWindowSize';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const { width } = GetWindowSize();
  const router = useRouter();

  const routeWhich = useCallback(() => {
    if (!width) return;
    if (width > 700) {
      if (router.route !== '/pc') {
        router.push('/pc');
      }
    } else {
      if (router.route !== '/mobile') {
        router.push('/mobile');
      }
    }
  }, [width, router.route]);
  useEffect(() => {
    routeWhich();
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
        <link rel="shortcut icon" href="/wonderTitle.png" />
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
}
