import { useNavigate } from 'react-router-dom'
import './Logo.css'

const Logo = () => {
  const nav = useNavigate()

  const clickHandler = () => {
    nav('/')
  }
  
  return (
    <p onClick={clickHandler} className='logo'>Freelance / Web Dev</p>
  )
}

export default Logo