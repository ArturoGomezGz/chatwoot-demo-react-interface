import Laboratorio from "../classes/Laboratorio"

const url = "https://gist.githubusercontent.com/ArturoGomezGz/e00b274d3be335a6d667a797c1244322/raw/b5b44da155c82ebb7f9c9367eb5d400167629437/data.json"

const data = await fetch(url).then((res) => res.json())

const laboratorios: Laboratorio[] = data.laboratorios.map((lab: Laboratorio) =>
  new Laboratorio(lab.nombre, lab.token)
)

export default laboratorios