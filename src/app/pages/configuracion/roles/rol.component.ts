
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { RolService} from '../../../services/service.index';
import { Rol } from './../../../models/rol.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styles: []
})
export class RolComponent implements OnInit {

  formRol: FormGroup;
  rol: Rol = new Rol('', '');
  idHotel: any;
  disabledInputIdentificador = false;

  constructor(
    public rolService: RolService,
    public router: Router,
    public rutaActivada: ActivatedRoute
    ) {
  }

  ngOnInit() {
    const id: any = this.rutaActivada.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.rolService.getRol(id).subscribe((respuesta: Rol) => {
        this.rol = respuesta;
        this.disabledInputIdentificador = true;
      });
    }
  }

  getRol(id: string) {
    this.rolService.getRol(id)
      .subscribe((rol: Rol) => {
        this.rol = rol;
      });
  }
  saveRol(formRol: NgForm) {
    if (formRol.invalid) {
      return;
    }
    this.rolService.saveRol(this.rol).subscribe(rol => {
      this.rol._id = rol._id;
      this.router.navigate(['/roles', this.rol._id]);
      this.disabledInputIdentificador = true;
    });
  }

}
