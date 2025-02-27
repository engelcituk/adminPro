import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// importacion de servicio
import { UsuarioService } from '../../services/service.index';
// modelo usuario importacion
import { Usuario } from '../../models/usuario.model';



declare function initPlugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // se carga este css porque el login tiene un css diferente al dashboard
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  username: string; // esto es para mantener info en el campo nombre de usuario, usando el check recuerdame
  token: string;

  constructor(
    public router: Router,
    public usuarioService: UsuarioService
    ) { }

  ngOnInit() {
    initPlugins();
    this.username = localStorage.getItem('username') || ''; //  si no hay nada en ls, username es vacio
    this.usuarioYaLogueado();
  }

  ingresar(forma: NgForm) {
    // this.router.navigate(['/dashboard']);
    if (forma.invalid) { // si datos de formulario no es valido, se termina la ejecucion
      return;
    }
    const usuario = new Usuario(null, forma.value.username, forma.value.password, '', '', true);

    this.usuarioService.login(usuario, forma.value.recuerdame)
      .subscribe( loginExitoso => this.router.navigate(['/dashboard']) );

  }
  // funcion que verifica si token existe, si es así es porque el usuario ya inició sesion
  usuarioYaLogueado() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
    }
  }
}
