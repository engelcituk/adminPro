import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/services/service.index';
import { Estado } from '../../../models/estado.model';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styles: []
})
export class EstadosComponent implements OnInit {

  estados: Estado[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean;

  constructor(public estadoService: EstadoService) { }

  ngOnInit() {
    this.getEstados();
  }

  // cargar estados
  getEstados() {

    this.cargando = true;

    this.estadoService.getEstados(this.desde)
      .subscribe((respuesta: any) => {
        // console.log(respuesta.estados);
        this.estados = respuesta.estados;
        this.totalRegistros = respuesta.total;
        this.cargando = false;

      });
  }

  cambiarDesde(valor: number) {

    const desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.getEstados();
  }

  buscarEstado(termino: string) {

    if (termino.length <= 0) {
      this.getEstados();
      return;
    }

    this.cargando = true;

    this.estadoService.buscarEstado(termino).subscribe((estados: Estado[]) => {
      this.estados = estados;
      this.cargando = false;

    });

  }
  borrarEstado(estado: Estado, indice: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `De borrar a ${estado.estado}`,
      type: 'question',
      cancelButtonColor: '#DD6B55',
      showConfirmButton: true,
      showCancelButton: true
    }).then(borrar => {
      if (borrar.value) {
        this.estados.splice(indice, 1);

        this.estadoService.deleteEstado(estado._id)
          .subscribe(borrado => {
            console.log(borrado);
            this.getEstados();
          }
          );
      }
    });
  }

}
