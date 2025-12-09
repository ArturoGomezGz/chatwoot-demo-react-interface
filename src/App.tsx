import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import LaboratorioView from './pages/LaboratorioView'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/laboratorio/:id' element={<LaboratorioView/>}/>
    </Routes>
  )
}

export default App
