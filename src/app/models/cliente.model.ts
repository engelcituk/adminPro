export class Cliente {

    constructor(
        public email: string,
        public telefono: string,
        public direccion: string,
        public estado: boolean,
        public pais: string,
        public id?: number,
    ) {

    }
}
