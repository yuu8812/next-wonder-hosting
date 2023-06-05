import { Center, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <Center w="100vw" h="100vh" bg="white" fontSize="2xl" flexDir={'column'}>
      <Image
        src={'/wonderTitle.png'}
        alt="mini-logo"
        width={100}
        height={100}
        priority
      />
      <Text
        mt={10}
        fontSize="2xl"
        ml={10}
        fontWeight={'bold'}
        letterSpacing={'3px'}
      >
        Loading...
      </Text>
    </Center>
  );
}
