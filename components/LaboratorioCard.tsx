import Laboratorio from "../classes/Laboratorio";
import "./LaboratorioCard.css"

interface Props {
    lab: Laboratorio;
}

export default function LaboratorioCard({ lab }: Props){
    return (
        <div className="card" onClick={()=>{alert(lab.getToken())}}>
            <h3 className="title">{lab.getNombre()}</h3>
        </div>
    )
}
