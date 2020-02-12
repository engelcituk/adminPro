import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Lugar } from './../../../models/lugar.model';
import { Hotel } from './../../../models/hotel.model';
import { HotelService } from '../../../services/service.index';


@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styles: []
})
export class LugarComponent implements OnInit {
  formEstado: FormGroup;
  lugar: Lugar = new Lugar('');
  desde: number = 0;
  hoteles: Hotel[] = [];
  constructor(public hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.getHoteles(this.desde).subscribe((respuesta: any) => {
      console.log(respuesta.hoteles);
      this.hoteles = respuesta.hoteles;
    });
  }

  saveLugar(formEstado: NgForm) {
    console.log(formEstado.valid);
    console.log(formEstado.value);
    if (formEstado.invalid) {
      return;
    }
  }
}
