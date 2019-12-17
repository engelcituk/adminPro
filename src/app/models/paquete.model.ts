export class Paquete {

    constructor(
        public name: string,
        public descripcion: string,
        public clave: string,
        public status: boolean,
        public total?: number,
        public _id?: string,
        public idHotel?: number,
        public idMoneda?: number,
    ) {

    }
}
