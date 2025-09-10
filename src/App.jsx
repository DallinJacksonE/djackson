import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { NotFound } from './pages/notfound/notfound';
import { Projects } from './pages/projects/projects.jsx';
import { Navbar } from './navbar/navbar.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
