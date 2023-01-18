import { Box } from '@chakra-ui/react';

const FullScreenGif = () => {
  return (
    <Box bg={'white'} w={'100vw'} h={'100vh'}>
      <video
        muted={true}
        autoPlay={true}
        playsInline
        preload="true"
        loop
        width="100%"
        height="100%"
      >
        <source src={'/gifs/yoko-blue.mp4'} type="video/mp4" />
      </video>
    </Box>
  );
};

export default FullScreenGif;
