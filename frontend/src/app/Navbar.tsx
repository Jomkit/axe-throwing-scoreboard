import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between w-full'>
      <NavLink to='/' viewTransition>
        Home
      </NavLink>
      <NavLink to="/scoreboard" viewTransition>
        Scoreboard
      </NavLink>
    </div>
  )
}

export default Navbar