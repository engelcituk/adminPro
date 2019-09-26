import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../models/hotel.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(public http: HttpClient) {
    // console.log('hotel servicio cargado');
  }

  // funcion tanto para guardar POST y actualizar (PUT)
  saveHotel(hotel: Hotel) {

    const url = 'Hoteles/add';

    if (hotel.id) {
      // actualizo el dato
      return this.http.post(url, hotel).pipe(
        map((respuesta: any) => {
          Swal.fire('Hotel actualizado', hotel.name, 'success');
          return respuesta.hotel;
        }));

    } else {
      // creo el hotel
      return this.http.post(url, hotel).pipe(
        map( (respuesta: any) => {
          Swal.fire('Hotel creado', hotel.name, 'success');
          return respuesta.hotel;
        }));
    }

  }

  getHoteles(desde: number = 0) {

    const url = 'Hoteles/getAll';

    return this.http.get(url);

  }

  getHotel(id: number) {
    const url = 'Hoteles/';
    return this.http.get(url + id).pipe(
      map( (respuesta: any ) => respuesta.hoteles));
  }

  deleteHotel(id: number) {
    const url = 'Hoteles/';
    return this.http.delete(url + id);

  }
}
