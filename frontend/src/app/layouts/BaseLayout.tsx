import { Outlet } from 'react-router';
import Nav from '../Navbar';
const BaseLayout = () => {
  return (
    <div>
        <Nav />
        <Outlet />
    </div>
  )
}

export default BaseLayout