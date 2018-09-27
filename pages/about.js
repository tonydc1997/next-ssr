import Link from 'next/link';
import Image from '../components/image';

const About = () => {
  return (
    <div style={{fontFamily: 'Open Sans, Helvetica Nue', color: '#242424'}}>
      <h1>About</h1>
      <Link href='/index'>
        <button>Home</button>
      </Link>
      <Image />
      <p>Don't mind the sparseness of this web page. Just testing out the functional process of turning a Client-Side Rendered App into a Server-Side Rendered one.</p>
    </div>
  );
}

export default About;
