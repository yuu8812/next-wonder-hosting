import Main from '../component/pc/Main';
import { Suspense } from 'react';
import { Box, Center } from '@chakra-ui/react';

const pc = () => {
  return (
    <Suspense
      fallback={
        <Center bg={'white'} w={'100vw'} h={'100vh'}>
          loading
        </Center>
      }
    >
      <Main />
    </Suspense>
  );
};

export default pc;
