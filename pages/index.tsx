import { Center, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function Home() {
  return (
    <Center w="100vw" h="100vh" bg="white" fontSize="2xl" flexDir={'column'}>
      <Image
        src={'/wonderTitle.png'}
        alt="mini-logo"
        width={70}
        height={70}
        priority
      />
      <Text mt={10} fontSize="md" ml={5}>
        loading...
      </Text>
    </Center>
  );
}
