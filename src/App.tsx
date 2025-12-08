import './App.css'
import LaboratorioCard from "../components/LaboratorioCard"
import laboratorios from "../services/readLaboratorios"

function App() {
  return (
    <>
      {laboratorios.map((lab)=>
        <LaboratorioCard lab={lab}/>
      )}
    </>
  )
}

export default App
