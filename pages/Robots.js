import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import RobotCard from '../components/RobotCard';

const robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <div>
        {
          props.robots.map(robot => (
            <li key={robot.id} style={{padding: '0.25em'}}>
              <Link href={`robots/${robot.id}`}>
                <RobotCard 
                  name={robot.name}
                  email={robot.email}
                />
              </Link>
            </li>
          ))
        }
      </div>
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
