import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import PageTransition from './components/PageTransition'
import SobreMi from './views/SobreMi'
import Contacto from './views/Contacto'

import Proyectos from './views/Proyectos'

import './App.css'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={<PageTransition><SobreMi /></PageTransition>} />
        <Route path="/proyectos" element={<PageTransition><Proyectos /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><Contacto /></PageTransition>} />

      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="app-main">
        <AnimatedRoutes />
      </main>
    </BrowserRouter>
  )
}

export default App