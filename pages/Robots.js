import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const robots = () => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <div>Robots Data</div>
    </div>
  )
}

robots.getInitialProps = async function() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    robots: data
  }
}

export default robots;
