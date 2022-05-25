import HeaderVec from './HeaderVec.svg'
import { Navbar } from '../Navbar/Navbar.jsx';

export function Header() {
    return (
        <div className='Header'>
          <div>
            <Navbar />
            <h1>Hola, soy Reyan.</h1> 
            <div><a className='HeaderMore' href='#'>Saber más</a></div>
          </div>
          <img src={HeaderVec} className='HeaderVec'></img>
        </div>
    );
  }