import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between w-full'>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to="/scoreboard">
        Scoreboard
      </NavLink>
    </div>
  )
}

export default Navbar