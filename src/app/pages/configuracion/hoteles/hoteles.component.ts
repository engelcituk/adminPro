import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../services/service.index';
import { Hotel } from '../../../models/hotel.model';

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
    this.getHoteles();
  }

  // cargar hoteles
  getHoteles() {

    this.cargando = true;

    this.hotelService.getHoteles( this.desde)
      .subscribe( ( respuesta: any )  => {
        // console.log(respuesta.hoteles);
        this.hoteles = respuesta.hoteles;
        this.totalRegistros = respuesta.total;
        this.cargando = false;

    });
  }
  // para el funcionamiento de los botones de paginado
  cambiarDesde(valor: number) {

    const desde = this.desde + valor;

    if ( desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.getHoteles();
  }

  buscarHotel(termino: string) {

    if (termino.length <= 0) {
      this.getHoteles();
      return;
    }

    this.cargando = true;

    this.hotelService.buscarHotel(termino).subscribe( (hoteles: Hotel[]) => {
      this.hoteles = hoteles;
      this.cargando = false;

    });

  }

  borrarHotel(hotel: Hotel, indice: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `De borrar a ${hotel.name}`,
      type: 'question',
      cancelButtonColor: '#DD6B55',
      showConfirmButton: true,
      showCancelButton: true
    }).then(borrar => {
      if (borrar.value) {
        this.hoteles.splice(indice, 1);

        this.hotelService.deleteHotel(hotel._id)
        .subscribe( borrado => {
            console.log(borrado);
            this.getHoteles();
           }
        );
      }
    });
  }

}
