import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventoModel } from './../../models/evento.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private url = 'https://login-app-88906.firebaseio.com/';

  constructor(private http: HttpClient) { }

  // metodo para crear el evento
  crearEvento(evento: EventoModel) {

    return this.http.post(`${this.url}/Eventos.json`, evento)
      .pipe(
        map((respuesta: any) => {
          evento.id = respuesta.name;
          return evento;
        })
      );
  }
  // metodo para actualizar el evento
  actualizarEvento(evento: EventoModel) {

    const eventoTemporal = {
      ...evento
    };
    delete eventoTemporal.id;
    return this.http.put(`${this.url}/Eventos/${evento.id}.json`, eventoTemporal);

  }
  // metodo para obtener el listado de eventos
  getEventos() {
    return this.http.get(`${this.url}/Eventos.json`).pipe(
      map(respuesta => this.crearObjetosEventos(respuesta))
    );
  }
  // metodo pora obtener un envento
  getEvento(id: string, fecha: string) {
    return this.http.get(`${this.url}/Eventos/${id}.json`);
  }
  // metodo para eliminar un evento
  deleteEvento(id: string) {

    return this.http.delete(`${this.url}/Eventos/${id}.json`);

  }
  // metodo para crear un arreglo al traer el listado de eventos
  private crearObjetosEventos(eventosObjs: object) {
    const eventos: EventoModel[] = [];

    if (eventosObjs === null) { return []; }

    Object.keys(eventosObjs).forEach(key => {
      const evento: EventoModel = eventosObjs[key];
      evento.id = key;
      eventos.push(evento);
    });

    return eventos;
  }
}
