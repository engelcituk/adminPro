export class Paquete {

    constructor(
        public name: string,
        public descripcion: string,
        public clave: string,
        public total: number,
        public status: boolean,
        public id?: number,
        public idHotel?: number,
        public idMoneda?: number,
    ) {

    }
}
