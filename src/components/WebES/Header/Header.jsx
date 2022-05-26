import HeaderVec from './HeaderVec.svg'
import { Navbar } from '../Navbar/Navbar.jsx';
import { Link } from "react-scroll";

export function Header() {
    return (
        <div className='Header'>
          <div>
            <Navbar />
            <h1>Hola, soy Reyan.</h1> 
            <div>
              <Link
              className='HeaderMore'
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>Saber más</Link>
            </div>
          </div>
          <img src={HeaderVec} className='HeaderVec' alt=''></img>
        </div>
    );
  }