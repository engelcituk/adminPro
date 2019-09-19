import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

 @ViewChild('txtPorcentaje', {static: true}) txtPorcentaje: ElementRef;
 @Input() leyenda: string = 'Leyenda';
 @Input() porcentaje: number = 50;
 @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }
  cambiarPorcentaje(nuevoValor: number) {
    // const elemHTML: any = document.getElementsByName('porcentaje')[0];
    // const elemHTML: any = document.getElementsByName('porcentaje')[0];

    if (nuevoValor >= 100) {
      this.porcentaje = 100 ;
    } else if (nuevoValor <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = nuevoValor;
    }
    // elemHTML.value = this.porcentaje;
    this.txtPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);
  }
  cambiarValor(valor: number) {

    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);
    // para mantener el foco
    this.txtPorcentaje.nativeElement.focus();
  }

}
