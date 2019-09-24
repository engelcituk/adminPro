import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HorarioService } from '../../../../services/service.index';
import { Horario } from './../../../../models/horario.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styles: []
})
export class HorarioComponent implements OnInit {

  forma: FormGroup;

  constructor(public horarioService: HorarioService) {
    this.forma = new FormGroup({
      hora: new FormControl(null, Validators.required),
      idHotel: new FormControl(1, Validators.required) // valor por defecto, validaciones
    });
  }

  ngOnInit() {
  }
// para registrar el usuario
  registrarHorario() {

    if (this.forma.invalid) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Datos no validos'
      });
      return;
    }

    const horario = new Horario(
      this.forma.value.hora,
      this.forma.value.idHotel
      );

    this.horarioService.crearHorario(horario)
      .subscribe( respuesta => {
        console.log(respuesta);
      });
  }
}
