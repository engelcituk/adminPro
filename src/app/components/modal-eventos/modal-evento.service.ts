import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalEventoService {

  public tipo: string;
  public id: string;
  public modalOculto: string = 'modalOculto';

  constructor() {
    // console.log('modal listo service');
  }
  ocultarModal() {
    this.modalOculto = 'modalOculto';
    this.id = null;
    this.tipo = null;
  }
  mostrarModal(tipo: string, id: string) {
    this.modalOculto = '';
    this.id = id;
    this.tipo = tipo;

  }
}
