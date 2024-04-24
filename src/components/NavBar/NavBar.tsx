import './NavBar.css'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

const NavBar = () => {
  
  return (
    <nav className='main-nav'>
      <div className='inner-nav'>
        <Logo />
        
        <div className='links'>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>

      
    </nav>
  )
}

export default NavBar