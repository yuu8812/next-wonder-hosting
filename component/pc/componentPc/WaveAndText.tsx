import { Box, Center, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

const WaveAndText = () => {
  useEffect(() => {
    if (typeof window === undefined) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.text-each-text', {
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.text-each-text',
        end: 'bottom center',
        start: '200 bottom',
        scrub: true,
        // markers: true,
      },
    });
  }, [gsap]);

  return (
    <Box overflow={'hidden'} zIndex={50} position={'relative'}>
      <Center flexDir={'column'}>
        <Center
          top={'40%'}
          position={'absolute'}
          color={'white'}
          whiteSpace={'nowrap'}
          flexDir={'column'}
          ml={10}
          fontSize={[null, '35px', '40px', '48px', '60px']}
          zIndex={40}
        >
          <Box
            position={'relative'}
            sx={{ WebkitTextStroke: '3px', lineHeight: '100px' }}
          >
            <Text
              className="text-each-text"
              sx={{ letterSpacing: '8px' }}
              opacity={0}
            >
              Googleで検索してもわからない、不
            </Text>
            <Text
              className="text-each-text"
              pl={2}
              sx={{ letterSpacing: '11px' }}
              opacity={0}
            >
              思議なモノ・コトに出会いたい。誰
            </Text>
            <Text
              className="text-each-text"
              sx={{ letterSpacing: '14px' }}
              opacity={0}
            >
              のためでもない、あなたがつくる、
            </Text>
            <Text
              className="text-each-text"
              sx={{ letterSpacing: '8px' }}
              opacity={0}
            >
              あなたの物語を発信するメディアラボ。
            </Text>
          </Box>
        </Center>
        <Box overflow={'hidden'} w={'100vw'} h={'100vw'}>
          <Box w="100vw" h={'max'} zIndex={1000}>
            <Image
              src={'/svgs/logo4.svg'}
              alt="logo"
              height={300}
              width={400}
              priority
              style={{
                // transform: 'scale(1.3)',
                transformOrigin: 'top left',
                zIndex: 50,
                width: 'auto',
                height: 'auto',
              }}
            />
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default WaveAndText;
