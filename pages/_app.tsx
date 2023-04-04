import type { AppProps } from 'next/app';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetWindowSize } from '../hooks/GetWindowSize';

type TProps = Pick<AppProps, 'Component' | 'pageProps'> & {
  deviceType: string;
};
const App = ({ Component, pageProps, deviceType }: TProps) => {
  const router = useRouter();
  const { width } = GetWindowSize();
  useEffect(() => {
    if (router.pathname === '/kitarubeki') {
      return;
    } else if (deviceType) {
      router.push('mobile');
    } else if (!deviceType && width < 800) {
      router.push('mobile');
    } else if (!deviceType) {
      router.push('pc');
    }
  }, [deviceType, width]);
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

App.getInitialProps = ({ ctx }: any) => {
  let isMobileView = (
    ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  //Returning the isMobileView as a prop to the component for further use.
  return {
    deviceType: Boolean(isMobileView),
  };
};

export default App;
