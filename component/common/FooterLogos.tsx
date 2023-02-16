import { Center } from '@chakra-ui/react';
import Link from 'next/link';

const FooterLogos = () => {
  return (
    <Center
      flexDir={'column'}
      h={'110vh'}
      justifyContent={'space-around'}
      bg={'white'}
      pb={16}
    >
      <Link href="/">
        <img
          loading="lazy"
          className=""
          src={'/svgs/logo3.webp'}
          alt="logo"
          width={350}
          height={350}
        />
      </Link>
      <Link href="https://www.yumegiwa.co.jp/" target="blank">
        <img
          loading="lazy"
          className="pt-20"
          src={'/images/logo.webp'}
          alt="logo"
          width={300}
          height={350}
        />
      </Link>
      <Link href="https://www.dracre.co.jp/宇宙子" target={'blank'}>
        <img
          loading="lazy"
          className="pt-20"
          src={'/images/universe.webp'}
          alt="logo"
          width={150}
          height={150}
        />
      </Link>
      <Link href="https://www.dracre.co.jp/" target={'blank'}>
        <img
          loading="lazy"
          className="pt-20"
          src={'/images/dracle.webp'}
          alt="logo"
          width={250}
          height={250}
        />
      </Link>
    </Center>
  );
};

export default FooterLogos;
