import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel.model';
import { URL_SERVICIOS } from './../../config/config';



@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(public http: HttpClient) {
    console.log('hotel servicio cargado');
  }

  crearHotel(hotel: Hotel) {

    const url = URL_SERVICIOS + '/Hoteles/add';

    return this.http.post(url, hotel);

  }

  cargarHoteles(desde: number = 0) {

    const url = URL_SERVICIOS + 'Hoteles/getAll';

    return this.http.get(url);

  }
}
