import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Estado } from './../../../models/estado.model';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styles: []
})
export class EstadoComponent implements OnInit {
  formEstado: FormGroup;
  estado: Estado = new Estado('');
  constructor() { }

  ngOnInit() {
  }

  saveEstado(formEstado: NgForm) {
    console.log(formEstado.valid);
    console.log(formEstado.value);
    if (formEstado.invalid) {
      return;
    }

  }

}
