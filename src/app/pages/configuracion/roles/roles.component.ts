import { Component, OnInit } from '@angular/core';
import { RolService } from '../../../services/service.index';

import { Rol } from '../../../models/rol.model';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styles: []
})
export class RolesComponent implements OnInit {
  roles: Rol[] = [];
  totalRegistros: number = 0;
  cargando: boolean;

  constructor(public rolService: RolService) {}

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    this.cargando = true;
    this.rolService.getRoles().subscribe((respuesta: any) => {
      this.roles = respuesta.roles;
      console.log(this.roles);
      this.totalRegistros = respuesta.total;
      this.cargando = false;
    });
  }

  buscarRol(termino: string) {
    if (termino.length <= 0) {
      this.getRoles();
      return;
    }
    this.cargando = true;
    this.rolService.buscarRol(termino).subscribe((roles: Rol[]) => {
      this.roles = roles;
      this.cargando = false;
    });

  }
  borrarRol(rol: Rol, indice: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `De borrar a ${rol.name}`,
      type: 'question',
      cancelButtonColor: '#DD6B55',
      showConfirmButton: true,
      showCancelButton: true
    }).then(borrar => {
      if (borrar.value) {
        this.roles.splice(indice, 1);
        this.rolService.deleteRol(rol._id)
        .subscribe( borrado => {
            this.getRoles();
           }
        );
      }
    });
  }
}
