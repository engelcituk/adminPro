import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventoModel } from './../models/evento.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventoService {


  constructor(private http: HttpClient) {
    console.log('eventos servicio cargado');

  }

  getEventos(desde: number = 0) {

    const url = 'evento?desde=' + desde;
    return this.http.get(url);

  }

}
