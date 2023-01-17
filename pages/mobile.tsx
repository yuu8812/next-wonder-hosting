import Main from '../component/mobile/Main';
import { Suspense } from 'react';
import { Box, Center } from '@chakra-ui/react';

interface Props {}

const mobile = () => {
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

export default mobile;
