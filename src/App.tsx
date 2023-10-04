import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/routes/Home'
import NotFound from './components/routes/NotFound'
import Portfolio from './components/routes/Portfolio'
import Contact from './components/routes/Contact'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
