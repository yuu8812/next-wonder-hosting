import { Center, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Center w="100vw" h="100vh" bg="white" fontSize="2xl" flexDir={'column'}>
      <img src={'/wonderTitle.png'} alt="mini-logo" width={100} height={100} />
      <Text mt={10} fontSize="2xl" ml={5}>
        Loading...
      </Text>
    </Center>
  );
}
