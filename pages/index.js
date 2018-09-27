import Link from 'next/link';
import robots from './robots';

const Index = () => (
  <div>
    <h1>SSR MAGICIAN</h1>
    <Link href='/about'>
      <button>About</button>
    </Link>
    <Link href='/robots'>
      <button>Robots</button>
    </Link>
  </div>
);

 export default Index;
