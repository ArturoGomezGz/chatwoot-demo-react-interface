import { Link } from "react-router-dom"
import laboratorios from "../../services/readLaboratorios"
import LaboratorioCard from "../../components/LaboratorioCard"

import "./Home.css"

export default function Home() {
    return (
        <div className="contenedor">
            {laboratorios.map((lab, index) =>
                <Link key={index} to={`/laboratorio/${index}`}>
                    <LaboratorioCard lab={lab} />
                </Link>
            )}
        </div>
    )
}