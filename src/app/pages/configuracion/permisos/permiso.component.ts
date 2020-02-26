import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { PermisoService} from '../../../services/service.index';
import { Permiso } from './../../../models/permiso.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styles: []
})
export class PermisoComponent implements OnInit {

  formPermiso: FormGroup;
  permiso: Permiso = new Permiso('', '', false, '');
  idHotel: any;
  disabledInputIdentificador = false;

  constructor(
    public permisoService: PermisoService,
    public router: Router,
    public rutaActivada: ActivatedRoute
    ) {
  }

  ngOnInit() {
    const id: any = this.rutaActivada.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.permisoService.getPermiso(id).subscribe((respuesta: Permiso) => {
        this.permiso = respuesta;
        this.disabledInputIdentificador = true;
      });
    }
  }

  getPermiso(id: string) {
    this.permisoService.getPermiso(id)
      .subscribe((permiso: Permiso) => {
        this.permiso = permiso;
      });
  }
  savePermiso(formPermiso: NgForm) {
    if (formPermiso.invalid) {
      return;
    }
    this.permisoService.savePermiso(this.permiso).subscribe(permiso => {
      this.permiso._id = permiso._id;
      this.router.navigate(['/permisos', this.permiso._id]);
      this.disabledInputIdentificador = true;
    });
  }

}
