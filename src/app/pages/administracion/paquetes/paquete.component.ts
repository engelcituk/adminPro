import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { PaqueteService } from '../../../services/service.index';

import { Paquete } from './../../../models/paquete.model';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styles: []
})
export class PaqueteComponent implements OnInit {
  formPaquete: FormGroup;

  paquete: Paquete = new Paquete('', '', '', true);

  constructor(
    public paqueteService: PaqueteService,
    public router: Router,
    public rutaActivada: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: any = this.rutaActivada.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.paqueteService.getPaquete(id).subscribe((respuesta: Paquete) => {
        this.paquete = respuesta;
        // this.campoPassword = false;
        console.log(this.paquete);
      });
    }
  }

  // para guardar a un nuevo paquete
  savePaquete(formPaquete: NgForm) {
    // console.log(formPaquete.valid);s
    // console.log(formPaquete.value);s
    if (formPaquete.invalid) {
      return;
    }
    this.paqueteService.savePaquete(this.paquete).subscribe(paquete => {
      this.paquete._id = paquete._id;
      // recargo la pagina
      this.router
        .navigateByUrl('/PaqueteComponent', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['paquetes', this.paquete._id]);
        });
    });
  }
}
