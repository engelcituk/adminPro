import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../models/hotel.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url: string = 'hotel'; // endpoint

  constructor(public http: HttpClient) {
    // console.log('hotel servicio cargado');
  }

  // funcion tanto para guardar POST y actualizar (PUT)
  saveHotel(hotel: Hotel) {

    let url = this.url;

    if (hotel._id) {
      // actualizo el dato
      url += '/' + hotel._id;
      return this.http.put(url, hotel).pipe(
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

    const url = 'hotel?desde=' + desde;
    return this.http.get(url);

  }

  getHotel(id: string) {
    const url = 'hotel/';
    return this.http.get(url + id).pipe(
      map( (respuesta: any ) => respuesta.hotel));
  }

  deleteHotel(id: string) {

    const url = 'hotel/';
    return this.http.delete(url + id).pipe(
      map( ( respuesta => {
        Swal.fire('Hotel borrado', 'El hotel a sido eliminado correctamente', 'success');
        return true;
      }))
    );

  }

  buscarHotel(termino: string) {
    const url = 'busqueda/coleccion/hoteles/' + termino;

    return this.http.get(url)
      .pipe(
        map( (respuesta: any) => respuesta.hoteles)
      );
  }

}
