import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MovePhotoMovie = () => {
  useEffect(() => {
    gsap.to('#move-phone-movie', {
      x: '-300vw',
      ease: 'none',
      overwrite: true,
      scrollTrigger: {
        trigger: '#move-phone-movie',
        start: 'top top',
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        end: 'bottom -1000px',
      },
    });
  }, []);

  return (
    <Box id="pin-base" overflow={'hidden'} top={0} margin={0} padding={0}>
      <Flex
        position="relative"
        w="300vw"
        h="100vh"
        bg={'white'}
        id="move-phone-movie"
        top={0}
        margin={0}
        padding={0}
      >
        <Flex
          w="100vw"
          bg={'white'}
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img
            src={'/svgs/logo5.svg'}
            alt="logo"
            width={250}
            height={250}
            style={{ zIndex: 1 }}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={250}
          >
            <source src={'/gifs/gorilla-big.mp4'} type="video/mp4" />
          </video>
          {/* <Lottie
            animationData={gorillaLottie}
            style={{ position: 'absolute', minWidth: 250, maxWidth: 250 }}
          ></Lottie> */}
        </Flex>
        <Flex
          w="calc(100vw)"
          bg={'white'}
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img
            src={'/svgs/logo5.svg'}
            alt="logo"
            width={250}
            height={250}
            style={{ zIndex: 1 }}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={250}
          >
            <source src={'/gifs/finger.mp4'} type="video/mp4" />
          </video>
          {/* <Lottie
            animationData={fingerLottie}
            style={{ position: 'absolute', minWidth: 250, maxWidth: 250 }}
          ></Lottie> */}
        </Flex>
        <Flex
          w="100vw"
          bg={'white'}
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <img
            src={'/svgs/logo5.svg'}
            alt="logo"
            width={250}
            height={250}
            style={{ zIndex: 1 }}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={250}
          >
            <source src={'/gifs/guitar.mp4'} type="video/mp4" />
          </video>
          {/* <Lottie
            animationData={guitarLottie}
            style={{ position: 'absolute', minWidth: 250, maxWidth: 250 }}
          ></Lottie> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default MovePhotoMovie;
