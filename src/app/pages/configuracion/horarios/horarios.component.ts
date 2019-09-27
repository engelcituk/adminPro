import { Component, OnInit } from '@angular/core';
import { HorarioService } from 'src/app/services/service.index';
import { Horario } from './../../../models/horario.model';


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

    this.horarioService.getHorarios().subscribe((respuesta: any) => {

      this.horarios = respuesta.horarios;
      this.totalRegistros = respuesta.total;
      this.cargando = false;

    });
  }
}
