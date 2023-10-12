import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const NavBar = () => {
  
  return (
    <nav className='main-nav'>
      <Logo size="small" />

      <div className='links'>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar