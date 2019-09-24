import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/service.index';
import { Hotel } from '../../../../models/hotel.model';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styles: []
})
export class HotelesComponent implements OnInit {

  hoteles: Hotel[] = [];
  desde: number = 0;
  totalRegistros: number = 0;

  constructor(public hotelService: HotelService) { }

  ngOnInit() {
    this.cargarHoteles();
  }

  // cargar hoteles
  cargarHoteles() {
    this.hotelService.cargarHoteles().subscribe(respuesta => {
      console.log(respuesta);
    });
  }

  cambiarDesde(valor: number) {

    const desde = this.desde + valor;
    console.log(desde);

  }
}
