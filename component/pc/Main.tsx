import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import Home from './Home';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  gsap.registerPlugin(ScrollTrigger);
  return <Home />;
};

export default Main;
