import { Component, OnInit } from '@angular/core';
import { PaqueteService } from '../../../services/service.index';
import { Paquete } from './../../../models/paquete.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styles: []
})
export class PaquetesComponent implements OnInit {
  paquetes: Paquete[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean;

  constructor(public paqueteService: PaqueteService) {}

  ngOnInit() {
    this.getPaquetes();
  }

  // cargar paquetes
  getPaquetes() {
    this.cargando = true;

    this.paqueteService.getPaquetes(this.desde).subscribe((respuesta: any) => {
      // console.log(respuesta.paquetes);
      this.paquetes = respuesta.paquetes;
      this.totalRegistros = respuesta.total;
      this.cargando = false;
    });
  }
  // para el funcionamiento de los botones de paginado <- anteriores-siguientes->
  cambiarDesde(valor: number) {
    const desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.getPaquetes();
  }
  // buscar a un paquete
  buscarPaquete(termino: string) {
    if (termino.length <= 0) {
      this.getPaquetes();
      return;
    }

    this.cargando = true;

    this.paqueteService
      .buscarPaquete(termino)
      .subscribe((paquetes: Paquete[]) => {
        this.paquetes = paquetes;
        this.cargando = false;
      });
  }
  // para borrar a un paquete
  borrarPaquete(paquete: Paquete, indice: number) {
    Swal.fire({
      title: '¿Está seguro?',
      text: `De borrar a ${paquete._id}`,
      type: 'question',
      cancelButtonColor: '#DD6B55',
      showConfirmButton: true,
      showCancelButton: true
    }).then(borrar => {
      if (borrar.value) {
        this.paquetes.splice(indice, 1);

        this.paqueteService.deletePaquete(paquete._id).subscribe(borrado => {
          console.log(borrado);
          this.getPaquetes();
        });
      }
    });
  }
}
