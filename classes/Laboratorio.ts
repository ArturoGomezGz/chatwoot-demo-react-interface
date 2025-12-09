
export default class Laboratorio {
    private nombre: string;
    private token: string;

    constructor(NOMBRE: string, TOKEN: string){
        this.nombre =  NOMBRE;
        this.token = TOKEN;
    }

    getNombre(){
        return this.nombre;
    }

    getToken(){
        return this.token;
    }
}
