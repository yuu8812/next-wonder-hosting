import { Box } from '@chakra-ui/react';
import FooterLogos from '../common/FooterLogos';
import FirstPage from './componentPc/FirstPage';
import FullScreenGif from './componentPc/FullScreenGif';
import GetMemberAndMovie from './componentPc/GetMemberAndMovie';
import Header from './componentPc/Header';
import Introduction from './componentPc/Introduction';
import Map from './componentPc/Map';
import Media from './componentPc/Media';
import QandA from './componentPc/QandA';
import WaveAndText from './componentPc/WaveAndText';
import WaveMot from './componentPc/WaveMot';

const Home = () => {
  return (
    <Box
      sx={{
        fontFamily: 'a-otf-gothic-mb101-pr6n,sans-serif',
        fontStyle: 'normal',
        fontWeight: '400px',
      }}
      // pos={'absolute'}
    >
      <Box position={'fixed'} top={0} zIndex={9999}>
        <Header />
      </Box>
      <Box position={'sticky'} top={60} pb={80} zIndex={0}>
        <FirstPage />
      </Box>
      <Box pos={'relative'}>
        <WaveAndText />
      </Box>
      <Box position={'sticky'} top={0} zIndex={10} overflow="hidden">
        <GetMemberAndMovie />
      </Box>
      <Box position={'relative'} zIndex={9000} top={200} pb={80} bg={'white'}>
        <Introduction />
      </Box>
      <Box position={'relative'} zIndex={9000} bg={'white'}>
        <Media />
      </Box>
      <Box position={'relative'} top={0} zIndex={9000}>
        <WaveMot />
      </Box>
      <Box position={'relative'} zIndex={9000} bg={'white'}>
        <FullScreenGif />
      </Box>
      <Box position={'relative'} zIndex={9000} bg={'white'}>
        <Map />
      </Box>
      <Box position={'relative'} zIndex={9000} bg={'white'}>
        <QandA />
      </Box>
      <Box position={'relative'} zIndex={9000} bg={'white'}>
        <Box>
          <FooterLogos />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
