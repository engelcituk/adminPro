
import { Component, OnInit } from '@angular/core';
import { LugarService } from '../../../services/service.index';
import { Lugar } from './../../../models/lugar.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styles: []
})
export class LugaresComponent implements OnInit {
  lugares: Lugar[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean;

  constructor(public lugarService: LugarService) {}

  ngOnInit() {
    this.getLugares();
  }

  // cargar lugares
  getLugares() {
    this.cargando = true;

    this.lugarService.getLugares(this.desde).subscribe((respuesta: any) => {
      // console.log(respuesta.lugares);
      this.lugares = respuesta.lugares;
      this.totalRegistros = respuesta.total;
      this.cargando = false;
    });
  }
  // para el funcionamiento de los botones de paginado <- anterioes-siguientes->
  cambiarDesde(valor: number) {
    const desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.getLugares();
  }

  // buscar a un lugar
  buscarLugar(termino: string) {
    if (termino.length <= 0) {
      this.getLugares();
      return;
    }

    this.cargando = true;

    this.lugarService
      .buscarLugar(termino)
      .subscribe((lugares: Lugar[]) => {
        this.lugares = lugares;
        this.cargando = false;
      });
  }
  // para borrar a un lugar
  borrarLugar(lugar: Lugar, indice: number) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `De borrar a ${lugar.name}`,
      type: 'question',
      cancelButtonColor: '#DD6B55',
      showConfirmButton: true,
      showCancelButton: true
    }).then(borrar => {
      if (borrar.value) {
        this.lugares.splice(indice, 1);
        this.lugarService.deleteLugar(lugar._id).subscribe(borrado => {
          this.getLugares();
        });
      }
    });
  }
}
