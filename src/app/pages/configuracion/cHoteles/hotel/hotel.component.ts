import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelService } from '../../../../services/service.index';
import { Hotel } from '../../../../models/hotel.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styles: []
})
export class HotelComponent implements OnInit {

  formHotel: FormGroup;
  hotel: Hotel = new Hotel('', '', '');

  constructor(public hotelService: HotelService,
              public router: Router,
              public rutaActivada: ActivatedRoute

    ) {

  }

  ngOnInit() {
    const id: any = this.rutaActivada.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.hotelService.getHotel(id)
        .subscribe((respuesta: Hotel) => {
          this.hotel = respuesta;
        });
    }
}
  saveHotel(formHotel: NgForm) {
    // console.log(formHotel.valid);
    // console.log(formHotel.value);
    if (formHotel.invalid) {
      return;
    }
    this.hotelService.saveHotel(this.hotel).subscribe( hotel => {
      console.log(hotel);
      this.hotel.id = hotel.id;
      this.router.navigate(['/hotel', this.hotel.id]);
    });

}
getHotel(id: number) {
  this.hotelService.getHotel(id)
  .subscribe( hotel => {
      this.hotel = hotel;
      console.log(this.hotel);

    }
  );
}
  // para registrar el usuario
  // guardarHotel() {

  //   if (this.formHotel.invalid) {
  //     Swal.fire({
  //       type: 'error',
  //       title: 'Oops...',
  //       text: 'Datos no validos'
  //     });
  //     return;
  //   }

  //   const hotel = new Hotel(
  //     this.formHotel.value.name,
  //     this.formHotel.value.codigo,
  //     this.formHotel.value.empresa

  //   );

  //   // console.log(this.formHotel.value);
  //   Swal.fire({
  //     title: 'Espere',
  //     text: 'Guardando información',
  //     type: 'info',
  //     allowOutsideClick: true
  //   });
  //   Swal.showLoading();

  //   this.hotelService.crearHotel(hotel)
  //     .subscribe(respuesta => {
  //       // console.log(respuesta);
  //       Swal.fire({
  //         title: hotel.name,
  //         text: 'Se guardó correctamente',
  //         type: 'success'
  //       });
  //       this.router.navigateByUrl('/hoteles');
  //     });
  // }

  actualizarHotel() {

  }
}
