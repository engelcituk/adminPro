import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { HorarioService, HotelService} from '../../../services/service.index';
import { Horario } from './../../../models/horario.model';
import { Hotel } from './../../../models/hotel.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styles: []
})
export class HorarioComponent implements OnInit {

  formHorario: FormGroup;
  hoteles: Hotel[] = [];
  horario: Horario = new Horario('', 1);

  constructor(
    public horarioService: HorarioService,
    public hotelService: HotelService) {

  }

  ngOnInit() {
    this.hotelService.getHoteles().subscribe((respuesta: any) => {
      this.hoteles = respuesta.hoteles;
      console.log(this.hoteles);

    });
  }

  saveHorario(formHorario: NgForm) {
    console.log(formHorario.valid);
    console.log(formHorario.value);
    if (formHorario.invalid) {
      return;
    }
    // this.hotelService.saveHotel(this.hotel).subscribe(hotel => {
    //   this.hotel.id = hotel.id;
    //   this.router.navigate(['/hotel', this.hotel.id]);
    // });

  }
}
