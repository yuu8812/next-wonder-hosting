import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const KitaruImage = () => {
  return (
    <Box mb={20} w={200} h={200}>
      <Link
        href="http://sekaizutto.com/%e6%9d%a5%e3%81%9f%e3%82%8b%e3%81%b9%e3%81%8d%e9%a2%a8%e6%99%af%e3%81%ae%e4%ba%88%e6%84%9f.html"
        target={'_blank'}
      >
        <video
          muted
          autoPlay={true}
          playsInline
          preload="auto"
          loop
          width={172}
          height={116}
          style={{
            transform: 'rotate(-20deg)',
            marginLeft: -10,
            paddingTop: 30,
          }}
        >
          <source src={'/gifs/new_program.mp4'} type="video/mp4" />
        </video>

        <Image
          src={'/images/kitarubeki2.webp'}
          alt="icon"
          width={500}
          height={200}
          style={{
            minWidth: 200,
            position: 'relative',
            bottom: 15,
            left: 70,
            zIndex: 20,
          }}
        />

        <video
          muted
          autoPlay={true}
          playsInline
          preload="auto"
          loop
          width={200}
          height={200}
          style={{
            position: 'relative',
            bottom: 60,
            left: 80,
            background: 'white',
          }}
        >
          <source src={'/gifs/star.mp4'} />
        </video>
      </Link>
    </Box>
  );
};

export default KitaruImage;
