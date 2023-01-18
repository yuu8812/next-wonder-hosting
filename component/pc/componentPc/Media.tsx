import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react';

import Vimeo from '@u-wave/react-vimeo';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Image from 'next/image';
import Link from 'next/link';

const Media = () => {
  return (
    <Box>
      <Box
        fontSize={'9px'}
        background={'white'}
        sx={{ borderTop: '10px solid', WebkitTextStroke: '0.4px' }}
        alignItems={'start'}
      >
        <Flex
          w={'100vw'}
          pt={40}
          fontSize={'9px'}
          background={'white'}
          sx={{ borderTop: '10px solid', WebkitTextStroke: '0.4px' }}
          alignItems={'start'}
          justifyContent={['center', 'space-around']}
          mx={'auto'}
        >
          <Center flexDir={'column'} mb={10} maxW={'25vw'}>
            <Center h={400} w={400}>
              <Link
                href="https://www.youtube.com/watch?v=DOEk-0MeQbI"
                target="blank"
              >
                <Center flexDir={'column'}>
                  <Image
                    loading="lazy"
                    src={'/images/3.webp'}
                    alt="image1"
                    width={330}
                    height={330}
                  />
                  <Center flexDir={'column'} h={100}>
                    <Text>ドキュメンタリー番組「のんたれ」</Text>
                    <Text my={1}>(Youtube Originals 2019)</Text>
                    <Text>ディレクター</Text>
                  </Center>
                </Center>
              </Link>
            </Center>
          </Center>
          <Center
            className="keen-slider__slide"
            flexDir={'column'}
            w={400}
            mt={-4}
            maxW={'25vw'}
          >
            <Center>
              <iframe
                loading="lazy"
                title="music"
                height="350"
                width="350"
                scrolling="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/809489728&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
              />
            </Center>
            <Center flexDir={'column'} h={100}>
              <Text>楽曲「彗星へのアンサー」</Text>
              <Text mt={3}>プロデューサー・歌の登場人物</Text>
            </Center>
          </Center>
          <Box
            flexDir={'column'}
            w={'400px'}
            position="relative"
            mt={-8}
            sx={{
              WebkitTextStroke: '0.6px',
            }}
            maxW={'25vw'}
          >
            <Box>
              <Text mt={5} fontSize={'xl'} borderBottom={'2px'} w={'max'}>
                講師紹介
              </Text>
              <Text fontSize={'xl'} mt={10}>
                中里龍造
              </Text>
            </Box>
            <Box position="absolute" top={-10} right={10}>
              <Image
                loading="lazy"
                alt="human"
                src={'/gifs/human.gif'}
                width={100}
                height={100}
                style={{ position: 'relative', top: 20, left: 10 }}
              />
              <Image
                loading="lazy"
                src={'/images/moon.webp'}
                alt="moon"
                width={120}
                height={100}
              />
            </Box>
            <Text fontSize={'xs'}>Nakazato Ryuzo</Text>
            <Text fontSize={'sm'} my={5} mt={20}>
              実験隊／ドキュメンタリー
            </Text>
            <Text
              fontSize={'11.5px'}
              w={'100%'}
              sx={{ lineHeight: '22px', WebkitTextStroke: '0.5px' }}
            >
              制度の境界面にある摩擦に興味を持ち作品創作を行う 主な作品に
              創作あーちすと”のん”の挑戦を追いかけたドキュメンタリー「のんたれ」(Youtube
              Originals)など。
              夢は「いつか異星人に出会った時、ケンカせずに仲良くする技術を発明する」こと。
            </Text>
          </Box>
        </Flex>
        <Flex alignItems={'start'} justifyContent={'space-around'}>
          <Center alignItems={'center'} maxW={'25vw'} ml={8}>
            <Flex
              flexDir={'column'}
              alignItems={'center'}
              justifyContent="center"
            >
              <Link href="https://www.yumegiwa.co.jp/" target={'blank'}>
                <Center
                  flexDir={'column'}
                  h={'300px'}
                  bg={'white'}
                  width={'400px'}
                  mb={10}
                >
                  <Image
                    loading="lazy"
                    src={'/images/mark.webp'}
                    alt="image2"
                    width={250}
                    height={150}
                  />
                  <Image
                    loading="lazy"
                    src={'/images/logo.webp'}
                    alt="logo"
                    width={400}
                    height={250}
                  />
                </Center>
                <Center
                  flexDir={'column'}
                  h={100}
                  position="relative"
                  top={-14}
                >
                  <Text>ミュータントスペース「YUMEGIWA 」</Text>
                  <Text mt={3}>店長</Text>
                </Center>
              </Link>
            </Flex>
          </Center>
          <Center
            flexDir={'column'}
            alignItems="center"
            justifyContent={'center'}
            maxW={'25vw'}
            // bg={'red'}
          >
            <Center>
              <iframe
                loading="lazy"
                title="music2"
                height="350"
                width="350"
                className=""
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/415877685&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
              />
            </Center>
            <Center flexDir={'column'} h={60} mt={-16}>
              <Text>AIT Podcast コレクティブとは宇宙意識・学びの拡張</Text>
              <Text my={1} fontSize={'7px'}>
                (AIT 2018)
              </Text>
              <Text>トーク</Text>
            </Center>
          </Center>
          <Box h={300} w={'25vw'}></Box>
        </Flex>
      </Box>
      <Box
        fontSize={'9px'}
        background={'white'}
        sx={{ WebkitTextStroke: '0.4px' }}
        ml={'20%'}
      >
        <Box
          flexDir={'column'}
          alignItems="center"
          justifyContent={'center'}
          w={600}
        >
          <Box>
            <Vimeo
              video="260878998"
              autoplay={false}
              muted={false}
              width={600}
              height={400}
            />

            <Center flexDir={'column'} h={100} mt={-8}>
              <Text>ツアー・イベント・パーティー</Text>
              <Text>「静かな集まり」(2018)</Text>
              <Text>DAYDREAM THEATER</Text>
              <Text>オーガナイザー</Text>
            </Center>
          </Box>
        </Box>
        <Box
          flexDir={'column'}
          alignItems="center"
          justifyContent={'center'}
          w={600}
        >
          <Box>
            <LiteYouTubeEmbed id="8viA4Wics9c" title="" />
            <Center flexDir={'column'} h={100} mt={0}>
              <Box>TED×UTokyo How to unravel the unwavering world?</Box>
              <Box className="pt-1">- A method DAYDREAM THEATER</Box>
              <Box className="pt-1">(東京大学2017)</Box>
              <Box className="pt-1">レクチャー</Box>
            </Center>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Media;
