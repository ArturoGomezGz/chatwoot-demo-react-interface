import Laboratorio from "../classes/Laboratorio";
import "./LaboratorioCard.css"

interface Props {
    lab: Laboratorio;
}

export default function LaboratorioCard({ lab }: Props){
    return (
        <div className="card">
            <h3 className="title">{lab.nombre}</h3>
        </div>
    )
}
