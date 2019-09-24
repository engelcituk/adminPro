import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HotelService } from '../../../../services/service.index';
import Swal from 'sweetalert2';
import { Hotel } from '../../../../models/hotel.model';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styles: []
})
export class HotelComponent implements OnInit {

  formHotel: FormGroup;

  constructor(public hotelService: HotelService) {

    this.formHotel = new FormGroup({
      name: new FormControl('Hotel ', Validators.required),
      codigo: new FormControl('123CARL', Validators.required),
      empresa: new FormControl('CARACOL', Validators.required) //
    });
  }

  ngOnInit() {
  }
  // para registrar el usuario
  registrarHotel() {

    if (this.formHotel.invalid) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Datos no validos'
      });
      return;
    }

    const hotel = new Hotel(
      this.formHotel.value.name,
      this.formHotel.value.codigo,
      this.formHotel.value.empresa

    );

    console.log(this.formHotel.value);

    this.hotelService.crearHotel(hotel)
      .subscribe(respuesta => {
        console.log(respuesta);
      });
  }
}
