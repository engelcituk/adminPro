import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/service.index';
import { Hotel } from '../../../../models/hotel.model';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styles: []
})
export class HotelesComponent implements OnInit {

  hoteles: Hotel[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean;

  constructor(public hotelService: HotelService) { }

  ngOnInit() {
    this.cargarHoteles();
  }

  // cargar hoteles
  cargarHoteles() {

    this.cargando = true;

    this.hotelService.cargarHoteles().subscribe( ( respuesta: any )  => {

      this.hoteles = respuesta.hoteles;
      this.totalRegistros = respuesta.total;
      this.cargando = false;

    });
  }

  cambiarDesde(valor: number) {

    const desde = this.desde + valor;

    if ( desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    console.log(desde);
    this.cargarHoteles();
  }
  buscarHotel(termino: string) {
    console.log(termino);
  }
}
