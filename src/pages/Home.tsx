import laboratorios from "../../services/readLaboratorios"
import LaboratorioCard from "../../components/LaboratorioCard"

export default function Home() {
    return (
        <>
            {laboratorios.map((lab)=>
                <LaboratorioCard lab={lab}/>
            )}
        </>
    )
}