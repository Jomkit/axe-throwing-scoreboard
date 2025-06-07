import { Link } from 'react-router';

const Homepage = () => {

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Scoreboard</h1>
      <div className='lg:h-1/2 flex items-center'>
        <Link to='/scoreboard/setup' viewTransition>
          <button className="submitBtn">Start Game</button>
        </Link>
      </div>
    </div>
  )
}

export default Homepage