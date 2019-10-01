import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

import { Agencia } from './../../../models/agencia.model';


@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styles: []
})
export class AgenciaComponent implements OnInit {

  formAgencia: FormGroup;
  agencia: Agencia = new Agencia('', '', '', '');


  constructor() { }

  ngOnInit() {
  }

  saveAgencia(formAgencia: NgForm) {
    console.log(formAgencia.valid);
    console.log(formAgencia.value);
    if (formAgencia.invalid) {
      return;
    }
  }
}
