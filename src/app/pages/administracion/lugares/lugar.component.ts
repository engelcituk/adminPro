import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Lugar } from './../../../models/lugar.model';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styles: []
})

export class LugarComponent implements OnInit {
  formEstado: FormGroup;
  lugar: Lugar = new Lugar('');
  constructor() { }

  ngOnInit() {
  }

  saveLugar(formEstado: NgForm) {
    console.log(formEstado.valid);
    console.log(formEstado.value);
    if (formEstado.invalid) {
      return;
    }

  }
}
