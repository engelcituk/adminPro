import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../../services/service.index';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  datosUsuario;

  constructor(
    public sideBar: SidebarService,
    public usuarioService: UsuarioService
    ) { }

  ngOnInit() {
      this.datosUsuario = this.getDatosUsuario();
  }

  // obtengo los datos del usuario logueado
  getDatosUsuario() {
    if (localStorage.getItem('usuario')) {
      this.datosUsuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.datosUsuario = null;
    }
    return this.datosUsuario;
  }

}

