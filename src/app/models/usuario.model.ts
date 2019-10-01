export class Usuario {

    constructor(
        public name: string,
        public usuario: string,
        public password: string,
        public fechaAlta: string,
        public tipoUsuario: string,
        public status: boolean,
        public id?: number,
        public idRol?: number,

    ) {

    }
}
