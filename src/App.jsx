import './App.css'
import Home from './Pages/Home/Home'
import HomeAdmin from './Pages/HomeAdmin/HomeAdmin'
import { HomeByRol } from './Pages/HomeByRol/HomeByRol'
import { Routes, Route } from 'react-router-dom'
import HomeUser from './Pages/HomeUser/HomeUser'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/miCuenta" element={<HomeByRol />} />
    </Routes>
    </>
  )
}

export default App
