import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const KitaruImage = () => {
  const router = useRouter();
  return (
    <Box mb={20} w={200} h={200}>
      <Link href="/kitarubeki">
        <video
          muted
          autoPlay={true}
          playsInline
          preload="true"
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
          priority
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
          preload="true"
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
