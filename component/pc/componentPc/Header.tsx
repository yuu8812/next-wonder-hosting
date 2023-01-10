import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
const Header = () => {
  return (
    <Box
      fontSize={[null, 'xs', 'xs', 'xs', 'md']}
      sx={{ WebkitTextStroke: '0.8px' }}
      bg={'white'}
      h={24}
      letterSpacing={'2px'}
      pos={'relative'}
    >
      <Flex w={'100vw'} pt={8} alignItems={'center'} pl={20}>
        <Box mt={2} ml={5} width={[null, 200, 200, 300]}>
          <Image
            src={'/svgs/logo2.webp'}
            alt="logo"
            width={300}
            height={37}
            priority
          />
        </Box>
        <Flex
          justifyContent={'space-around'}
          w={'45%'}
          mt={2}
          position={'absolute'}
          right={28}
        >
          <ScrollLink
            to="introduction"
            smooth={true}
            as={'a'}
            href={'#introduction'}
          >
            <Box sx={{ cursor: 'grab' }}>コース内容紹介</Box>
          </ScrollLink>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdyy2os-2-crI5pNUwTLas5d7UNYlYNTi865oc3uIIMrLhBSA/viewform"
            target={'blank'}
          >
            申し込み
          </Link>
          <ScrollLink
            to="map"
            smooth={true}
            offset={-50}
            as={'a'}
            href={'#map'}
          >
            <Box sx={{ cursor: 'grab' }}>アクセス</Box>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-50}
            as={'a'}
            href={'#contact'}
          >
            <Box sx={{ cursor: 'grab' }}>お問い合わせ</Box>
          </ScrollLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
