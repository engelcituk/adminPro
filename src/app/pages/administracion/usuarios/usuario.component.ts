import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Usuario } from './../../../models/usuario.model';
import { UsuarioService } from '../../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
import {ROLES} from '../../../config/config';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  formUsuario: FormGroup;
  usuario: Usuario = new Usuario('', '', '', '', '', true);
  campoPassword: boolean = true;
  roles: any;



  constructor(
    public usuarioService: UsuarioService,
    public router: Router,
    public rutaActivada: ActivatedRoute
  ) { }

  ngOnInit() {
    const id: any = this.rutaActivada.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.usuarioService.getUsuario(id)
        .subscribe((respuesta: Usuario) => {
          this.usuario = respuesta;
          this.campoPassword = false;
          console.log(this.usuario);
        });
    }
    this.roles = ROLES;
    console.log(this.roles);
  }
  // para guardar a un nuevo usuario
  saveUsuario(formUsuario: NgForm) {
    console.log(formUsuario.valid);
    console.log(formUsuario.value);
    if (formUsuario.invalid) {
      return;
    }
    this.usuarioService.saveUsuario(this.usuario).subscribe(usuario => {
      this.usuario._id = usuario._id;
      // recargo la pagina
      this.router.navigateByUrl('/UsuarioComponent' , { skipLocationChange: true }).then(() => {
        this.router.navigate(['usuario', this.usuario._id]);
      });
    });
  }
}
