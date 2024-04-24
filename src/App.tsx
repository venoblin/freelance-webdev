import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NotFoundRoute from './components/routes/NotFoundRoute/NotFoundRoute'
import PortfolioRoute from './components/routes/PortfolioRoute/PortfolioRoute'
import ContactRoute from './components/routes/ContactRoute/ContactRoute'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      
      <main>
        <Routes>
          <Route path='/' element={<HomeRoute />} />
          <Route path='/portfolio' element={<PortfolioRoute />} />
          <Route path='/contact' element={<ContactRoute />} />
          <Route path='*' element={<NotFoundRoute />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
