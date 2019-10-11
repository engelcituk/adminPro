import { Component, OnInit } from '@angular/core';
import { AgenciaService } from '../../../services/service.index';
import { Agencia } from './../../../models/agencia.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styles: []
})
export class AgenciasComponent implements OnInit {

  agencias: Agencia[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean;

  constructor(public agenciaService: AgenciaService) { }

  ngOnInit() {
    this.getAgencias();
  }
  // cargar agenciaes
  getAgencias() {

    this.cargando = true;

    this.agenciaService.getAgencias(this.desde)
      .subscribe((respuesta: any) => {
        // console.log(respuesta.agencias);
        this.agencias = respuesta.agencias;
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
    this.getAgencias();
  }
  // buscar a un agencia
  buscarAgencia(termino: string) {

    if (termino.length <= 0) {
      this.getAgencias();
      return;
    }

    this.cargando = true;

    this.agenciaService.buscarAgencia(termino).subscribe((agencias: Agencia[]) => {
      this.agencias = agencias;
      this.cargando = false;

    });

  }
  borrarAgencia(agencia: Agencia, indice: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `De borrar a ${agencia.name}`,
      type: 'question',
      cancelButtonColor: '#DD6B55',
      showConfirmButton: true,
      showCancelButton: true
    }).then(borrar => {
      if (borrar.value) {
        this.agencias.splice(indice, 1);

        this.agenciaService.deleteAgencia(agencia._id)
          .subscribe(borrado => {
            console.log(borrado);
            this.getAgencias();
          }
          );
      }
    });
  }

}
