import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homes from './pages/Homes'
import Tours from './pages/Tours'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App