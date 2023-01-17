import Main from '../component/mobile/Main';
import { Suspense } from 'react';

interface Props {}

const mobile = () => {
  return (
    <Suspense fallback={null}>
      <Main />
    </Suspense>
  );
};

export default mobile;
