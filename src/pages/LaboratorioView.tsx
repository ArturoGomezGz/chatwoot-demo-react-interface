import laboratorios from "../../services/readLaboratorios"
import { useParams } from "react-router-dom"
import ChatWidget from "../../components/ChatWidget"

export default function LaboratorioView() {
    const { id } = useParams<{ id : string}>()
    const lab = laboratorios[Number(id)]
    return (
        <>
            <h1>{lab.getNombre()}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum commodi tempore quod sit porro, earum in illum ullam enim atque nesciunt possimus provident fugit recusandae, totam architecto, laboriosam iusto.</p>
            <a href="/">Back Home</a> {/* Se usa <a> para refrescar la pagina y que el componente del chat se elimine*/}
            <ChatWidget websiteToken={lab.getToken()}/>
        </>
    )
}