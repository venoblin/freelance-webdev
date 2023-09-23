import { useNavigate } from 'react-router-dom'
import { LogoProps } from '../types/logo'
import '../styles/Logo.css'

const Logo = (props: LogoProps) => {
  const nav = useNavigate()

  const clickHandler = () => {
    nav('/')
  }
  
  return (
    <p onClick={clickHandler} className='logo'>Freelance / Web Dev</p>
  )
}

export default Logo