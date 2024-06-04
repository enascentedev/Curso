import './Navbar.css';
import {Link, NavLink} from 'react-router-dom';
function Navbar() {


  return (
    <nav>
      <NavLink to="/"> home</NavLink>
			<NavLink to="/about"> Sobre</NavLink>
    </nav>
  );
}

export default Navbar;