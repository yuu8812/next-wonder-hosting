import { Box, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const kitarubeki = () => {
  const router = useRouter();
  return (
    <Box>
      <Center zIndex={30} pos="absolute" top={'20%'} w="full">
        <Box
          bg={'black'}
          w={'30%'}
          h={24}
          cursor={'pointer'}
          opacity={0}
          onClick={() => {
            router.push('https://www.google.com');
          }}
        ></Box>
      </Center>
      <img
        src="/images/Link2.png"
        style={{
          width: '100%',
          overflow: 'hidden',
        }}
      />
    </Box>
  );
};

export default kitarubeki;
