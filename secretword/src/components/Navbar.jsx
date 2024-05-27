import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {


  return (
    <nav>
      <Link to="/"> home</Link>
			<Link to="/about"> Sobre</Link>
    </nav>
  );
}

export default Navbar;