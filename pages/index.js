import Link from 'next/link';

const Index = () => (
  <div>
    <h1>SSR MAGICIAN</h1>
    <Link href='/about'>
      <button>About</button>
    </Link>
    <Link href='/Robots'>
      <button>Robots</button>
    </Link>
  </div>
);

 export default Index;
