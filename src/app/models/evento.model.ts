export class EventoModel {
    id: string;
    title: string;
    start: string;
    color: string;
    nombrePareja: string;
    creadaEn: Date;
    fechaEvento: string;
    terminada: boolean;

    constructor() {
        this.terminada = false;
        this.color = '#5bc0de';
    }
}
