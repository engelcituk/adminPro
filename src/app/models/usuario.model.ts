export class Usuario {

    constructor(
        public name: string,
        public usuario: string,
        public password: string,
        public fechaAlta: string,
        public role: string,
        public status: boolean,
        public _id?: string,

    ) {

    }
}
