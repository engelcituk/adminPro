import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { AgenciaService } from '../../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';

import { Agencia } from './../../../models/agencia.model';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styles: []
})
export class AgenciaComponent implements OnInit {

  formAgencia: FormGroup;
  agencia: Agencia = new Agencia('', '', '', '');


  constructor(
    public agenciaService: AgenciaService,
    public router: Router,
    public rutaActivada: ActivatedRoute
  ) { }

  ngOnInit() {

    const id: any = this.rutaActivada.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.agenciaService.getAgencia(id)
        .subscribe((respuesta: Agencia) => {
          this.agencia = respuesta;
          // this.campoPassword = false;
          // console.log(this.agencia);
        });
    }
  }

  // para guardar a un nuevo agencia
  saveAgencia(formAgencia: NgForm) {
    // console.log(formAgencia.valid);
    // console.log(formAgencia.value);
    if (formAgencia.invalid) {
      return;
    }
    this.agenciaService.saveAgencia(this.agencia).subscribe(agencia => {
      this.agencia._id = agencia._id;
      // recargo la pagina
      this.router.navigateByUrl('/AgenciaComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['agencia', this.agencia._id]);
      });
    });
  }
}
