import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/services/service.index';
import { Horario } from './../../../models/horario.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styles: []
})
export class HorariosComponent implements OnInit {

  horarios: Horario[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean;

  constructor( public horarioService: HorarioService) { }

  ngOnInit() {
    this.getHorarios();
  }

  getHorarios() {

    this.cargando = true;

    this.horarioService.getHorarios(this.desde).subscribe((respuesta: any) => {

      this.horarios = respuesta.horarios;
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
    this.getHorarios();
  }

  borrarHorario(horario: Horario, indice: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `De borrar a ${horario.hora}`,
      type: 'question',
      cancelButtonColor: '#DD6B55',
      showConfirmButton: true,
      showCancelButton: true
    }).then(borrar => {

      if (borrar.value) {
        this.horarios.splice(indice, 1);

        this.horarioService.deleteHorario(horario._id)
          .subscribe(borrado => {
            console.log(borrado);
            this.getHorarios();
          }
          );
      }

    });
  }
}
