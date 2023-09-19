import '../styles/NavBar.css'
import Logo from './Logo'

const NavBar = () => {
  return (
    <nav className='main-nav'>
      <Logo />

      <div className='links'>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
      </div>
    </nav>
  )
}

export default NavBar