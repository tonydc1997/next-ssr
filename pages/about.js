import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href='/index'>
        <button>Home</button>
      </Link>
      {/* <a href="/index">Home</a> */}
    </div>
  );
}

export default About;
