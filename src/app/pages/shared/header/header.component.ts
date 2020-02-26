import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './../../../services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  datosUsuario;

  constructor(
    public router: Router,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit() {
      this.datosUsuario = this.getDatosUsuario();
  }

  // obtengo los datos desde localstorage usuario logueado
  getDatosUsuario() {
    if (localStorage.getItem('usuario')) {
      this.datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.datosUsuario = null;
    }
    return this.datosUsuario;
  }


}
