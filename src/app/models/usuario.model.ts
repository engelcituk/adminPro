import { Permiso } from './permiso.model';

export class Usuario {

    constructor(
        public name: string,
        public usuario: string,
        public password: string,
        public role: string,
        public fechaAlta: string,
        public status: boolean,
        public permisos: Permiso[],
        public _id?: string,

    ) {

    }
}
