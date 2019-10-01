import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Usuario } from './../../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  formUsuario: FormGroup;
  usuario: Usuario = new Usuario('', '', '', '', '', true);


  constructor() { }

  ngOnInit() {
  }

  saveUsuario(formUsuario: NgForm) {
    console.log(formUsuario.valid);
    console.log(formUsuario.value);
    if (formUsuario.invalid) {
      return;
    }
    // this.hotelService.saveHotel(this.hotel).subscribe(hotel => {
    //   this.hotel.id = hotel.id;
    //   this.router.navigate(['/hotel', this.hotel.id]);
    // });

  }
}
