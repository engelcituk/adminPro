import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel.model';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(public http: HttpClient) {
    console.log('hotel servicio cargado');
  }

  crearHotel(hotel: Hotel) {

    const url = 'Hoteles/add';

    return this.http.post(url, hotel);

  }

  cargarHoteles(desde: number = 0) {

    const url = 'Hoteles/getAll';

    return this.http.get(url);

  }
}
