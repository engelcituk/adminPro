import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Paquete } from './../../../models/paquete.model';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styles: []
})
export class PaqueteComponent implements OnInit {
  formPaquete: FormGroup;
  paquete: Paquete = new Paquete('', '', '', 0, true);

  constructor() { }

  ngOnInit() {
  }

  savePaquete(formPaquete: NgForm) {
    console.log(formPaquete.valid);
    console.log(formPaquete.value);
    if (formPaquete.invalid) {
      return;
    }
    // this.hotelService.saveHotel(this.hotel).subscribe(hotel => {
    //   this.hotel.id = hotel.id;
    //   this.router.navigate(['/hotel', this.hotel.id]);
    // });

  }

}
