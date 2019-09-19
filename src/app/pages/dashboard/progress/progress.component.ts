import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  porcentaje: number = 50;
  porcentaje2: number = 60;

  constructor() { }

  ngOnInit() {
  }
  // actualizar(evento: number) {
  //   console.log('evento', evento);
  // }
}

