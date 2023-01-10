import { useEffect } from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const GetMemberAndMovie = () => {
  useEffect(() => {
    gsap.to('#phone-movie', {
      opacity: 0,
      scrollTrigger: {
        trigger: '#phone-movie',
        start: 'top 100px',
        end: 'top 50px',
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    gsap.to('#get-member1', {
      opacity: 1,
      scrollTrigger: {
        trigger: '#phone-movie',
        start: 'top 50px',
        end: 'top 0px',
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    gsap.to('#get-member2', {
      opacity: 1,
      scrollTrigger: {
        trigger: '#phone-movie',
        start: 'top 0px',
        end: 'top -30px',
        scrub: true,
      },
    });
  }, []);
  useEffect(() => {
    gsap.to('#get-member3', {
      opacity: 1,
      scrollTrigger: {
        trigger: '#phone-movie',
        start: 'top -20px',
        end: 'top -50px',
        scrub: true,
      },
    });
  }, []);

  return (
    <Box
      bg={'white'}
      h="100vh"
      w={'100vw'}
      sx={{ WebkitTextStroke: '1.2px', letterSpacing: '2px' }}
      display="block"
    >
      <Center
        position="relative"
        justifyContent="space-around"
        bg={'white'}
        mx={20}
        h={'100vh'}
        id={'phone-movie'}
      >
        <Flex
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
          maxW={330}
        >
          <Image
            src={'/svgs/logo5.svg'}
            alt="logo"
            width={400}
            height={700}
            style={{ zIndex: 10 }}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={'100%'}
          >
            <source src={'/gifs/finger.mp4'} type="video/mp4" />
          </video>
        </Flex>
        <Flex
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
          maxW={330}
        >
          <Image
            // loading="lazy"
            src={'/svgs/logo5.svg'}
            alt="logo"
            width={400}
            style={{ zIndex: 1 }}
            height={700}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={'100%'}
          >
            <source src={'/gifs/gorilla-big.mp4'} type="video/mp4" />
          </video>
        </Flex>
        <Flex
          h="100vh"
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
          maxW={330}
        >
          <Image
            // loading="lazy"
            src={'/svgs/logo5.svg'}
            alt="logo"
            width={400}
            style={{ zIndex: 1 }}
            height={700}
          />
          <video
            muted
            autoPlay={true}
            playsInline
            preload="auto"
            loop
            style={{ position: 'absolute' }}
            width={'100%'}
          >
            <source src={'/gifs/guitar.mp4'} type="video/mp4" />
          </video>
        </Flex>
      </Center>
      <Box
        w={'100%'}
        position={'absolute'}
        top={72}
        left={'17%'}
        fontSize={'3xl'}
      >
        <Text id="get-member1" opacity={0} sx={{ fontSize: '28px' }}>
          メンバー募集
        </Text>
        <Box
          id="get-member2"
          opacity={0}
          sx={{
            letterSpacing: '2px',
            fontSize: '15px',
            WebkitTextStroke: '0.7px',
          }}
          ml={3}
          lineHeight={'30px'}
        >
          <Text mb={5} mt={2}>
            こういう人に来て欲しいです。
          </Text>
          <Text>何かを作ってみたい人</Text>
          <Text>物語に興味がある人</Text>
          <Text>夢中になれるものを探している人</Text>
          <Text>モヤモヤしている人</Text>
          <Text>退屈な人</Text>
          <Text>世界をまだ僅かに信じている人</Text>
          <Text>誰にも認められない異能を持っているような気がする人</Text>
          <Text>不思議な夢を見る人</Text>
          <Text>宇宙人</Text>
        </Box>
        <Text
          sx={{ writingMode: 'vertical-rl' }}
          textColor={'black'}
          fontSize="3xl"
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          id="get-member3"
          opacity={0}
          height={'400px'}
          position={'absolute'}
          right={'25%'}
          top={-100}
        >
          僕たちは
          <br />
          孤独な
          <br />
          駱駝 （らくだ）なのか？
        </Text>
      </Box>
    </Box>
  );
};

export default GetMemberAndMovie;
