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
}
