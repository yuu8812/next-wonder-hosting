import Main from '../component/pc/Main';
import { Suspense } from 'react';

const pc = () => {
  return (
    <Suspense fallback={null}>
      <Main />
    </Suspense>
  );
};

export default pc;
