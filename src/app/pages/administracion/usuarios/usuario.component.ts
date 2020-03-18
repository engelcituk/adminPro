import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Usuario } from './../../../models/usuario.model';
import { Rol } from './../../../models/rol.model';
// import { Select2OptionData } from 'ng2-select2';

import { UsuarioService, RolService } from '../../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';
// import {ROLES} from '../../../config/config';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  formUsuario: FormGroup;
  usuario: Usuario = new Usuario('', '', '', '', '', true, []);
  campoPassword: boolean = false;
  roles: any;
  // public exampleData: Array<Select2OptionData>;
  // public options: Select2Options;


  constructor(
    public usuarioService: UsuarioService,
    public rolService: RolService,
    public router: Router,
    public rutaActivada: ActivatedRoute
  ) {
      // muestro los roles
      this.rolService.getRoles().subscribe((respuesta: any) => {
        this.roles = respuesta.roles;
        console.log(this.roles);
      });
    }

  ngOnInit() {
    const id: any = this.rutaActivada.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.usuarioService.getUsuario(id)
        .subscribe((respuesta: Usuario) => {
          this.usuario = respuesta;
          this.campoPassword = true;
          console.log(this.usuario);
        });
    }

    // this.roles = ROLES;
    
  }
  // para guardar a un nuevo usuario
  saveUsuario(formUsuario: NgForm) {
    console.log(formUsuario.valid);
    console.log(formUsuario.value);
    if (formUsuario.invalid) {
      return;
    }
    /* this.usuarioService.saveUsuario(this.usuario).subscribe(usuario => {
      this.usuario._id = usuario._id;
      // recargo la pagina
      this.router.navigateByUrl('/UsuarioComponent' , { skipLocationChange: true }).then(() => {
        this.router.navigate(['usuarios', this.usuario._id]);
      });
    }); */
  }
}
