import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/routes/Home'
import NotFound from './components/routes/NotFound'

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
