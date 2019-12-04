import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';

declare function initPlugins();

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'] // se carga este css porque el login tiene un css diferente al dashboard

})
export class RegistrarComponent implements OnInit {

  forma: FormGroup; // formulario de tipo reactive forms, par el registro de un usuario

  constructor(
    public usuarioService: UsuarioService,
    public router: Router
    ) { }

  ngOnInit() {
    initPlugins();
    // para las reglas del formulario-... reactive forms
    this.forma = new FormGroup({
                    // FormControl(valorDefecto, validaciones)
      nombre: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required)
    }, { validators: this.sonIguales('password', 'password2')});

  }
  registrarUsuario() {
    // this.forma.value obtiene el valor de los campos del formulario: console.log(this.forma.value); console.log(this.forma.invalid);
    if ( this.forma.invalid ) {
        return;
    }

    const usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.username,
      this.forma.value.password,
      'USER_ROLE',
      '',
      true
    );

    this.usuarioService.crearUsuario( usuario)
    // redirijo al login
    .subscribe(respuesta => this.router.navigate(['/login']));
  }

  // funcion para verificar que dos campos tiene los mismos valores
  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }



}
