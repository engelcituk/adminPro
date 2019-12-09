import { Component, OnInit } from '@angular/core';
import { ModalEventoService } from './modal-evento.service';

@Component({
  selector: 'app-modal-eventos',
  templateUrl: './modal-eventos.component.html',
  styles: []
})
export class ModalEventosComponent implements OnInit {

  constructor(
    public modalEventoService: ModalEventoService
  ) {
    console.log('modal listo');

  }

  ngOnInit() {

  }
  cerrarModal() {
    this.modalEventoService.ocultarModal();
  }


}
