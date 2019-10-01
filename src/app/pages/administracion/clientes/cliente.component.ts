import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Cliente } from './../../../models/cliente.model';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {
  formCliente: FormGroup;

  cliente: Cliente = new Cliente('', '', '', true, '');
  constructor() { }

  ngOnInit() {
  }

  saveCliente(formCliente: NgForm) {
    console.log(formCliente.valid);
    console.log(formCliente.value);
    if (formCliente.invalid) {
      return;
    }
    // this.hotelService.saveHotel(this.hotel).subscribe(hotel => {
    //   this.hotel.id = hotel.id;
    //   this.router.navigate(['/hotel', this.hotel.id]);
    // });

  }


}
