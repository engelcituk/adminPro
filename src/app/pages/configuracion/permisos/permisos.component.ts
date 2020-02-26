import { Component, OnInit } from '@angular/core';
import { PermisoService } from 'src/app/services/service.index';
import { Permiso } from '../../../models/permiso.model';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styles: []
})
export class PermisosComponent implements OnInit {
  permisos: Permiso[] = [];
  totalRegistros: number = 0;
  cargando: boolean;

  constructor(public permisoService: PermisoService) {}

  ngOnInit() {
    this.getPermisos();
  }

  getPermisos() {
    this.cargando = true;
    this.permisoService.getPermisos().subscribe((respuesta: any) => {
      this.permisos = respuesta.permisos;
      this.totalRegistros = respuesta.total;
      this.cargando = false;
    });
  }

  buscarPermiso(termino: string) {
    if (termino.length <= 0) {
      this.getPermisos();
      return;
    }
    this.cargando = true;
    this.permisoService.buscarPermiso(termino).subscribe((permisos: Permiso[]) => {
      this.permisos = permisos;
      this.cargando = false;
    });

  }
  borrarPermiso(permiso: Permiso, indice: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `De borrar a ${permiso.name}`,
      type: 'question',
      cancelButtonColor: '#DD6B55',
      showConfirmButton: true,
      showCancelButton: true
    }).then(borrar => {
      if (borrar.value) {
        this.permisos.splice(indice, 1);
        this.permisoService.deletePermiso(permiso._id)
        .subscribe( borrado => {
            this.getPermisos();
           }
        );
      }
    });
  }
}
