import Laboratorio from "../classes/Laboratorio"
import data from "../src/assets/laboratorios.json"

const laboratorios: Laboratorio[] = data.laboratorios.map((lab) =>
  new Laboratorio(lab.nombre, lab.token)
)

export default laboratorios