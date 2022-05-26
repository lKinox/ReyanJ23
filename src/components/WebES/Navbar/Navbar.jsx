import { Link } from "react-scroll";

export function Navbar() {

    return (
      <div className='Navbar'>
        <div>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}>Sobre mí</Link>
        </div>
        <div>
        <Link
          activeClass="active"
          to="Works"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1600}>Trabajos</Link>
        </div>
        <div><Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1600}>Contacto</Link></div>
      </div>
    );
  }