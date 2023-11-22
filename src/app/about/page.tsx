import AboutPc from './index';
import AboutH5 from './h5';

export default function AboutPage({ searchParams }: any) {
  const { viewport } = searchParams;
  if (viewport === 'h5') {
    return <AboutH5 />;
  } else {
    return <AboutPc />;
  }
}
