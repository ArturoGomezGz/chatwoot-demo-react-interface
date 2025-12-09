import { Link } from "react-router-dom"
import laboratorios from "../../services/readLaboratorios"
import LaboratorioCard from "../../components/LaboratorioCard"

export default function Home() {
    return (
        <>
            {laboratorios.map((lab, index) =>
                <Link key={index} to={`/laboratorio/${index}`}>
                    <LaboratorioCard lab={lab} />
                </Link>
            )}
        </>
    )
}