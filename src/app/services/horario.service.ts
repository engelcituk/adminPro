import { Injectable } from '@angular/core';
import { Horario } from '../models/horario.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de horario listo');
  }

  // funcion tanto para guardar POST y actualizar (PUT)
  saveHorario(horario: Horario) {

    let url = 'horario';

    if (horario._id) {
      // actualizo el horario
      url += '/' + horario._id;
      return this.http.put(url, horario).pipe(
        map((respuesta: any) => {
          Swal.fire('Horario actualizado', horario.hora, 'success');
          return respuesta.horario;
        }));

    } else {
      // creo el horario
      return this.http.post(url, horario).pipe(
        map((respuesta: any) => {
          Swal.fire('Horario creado', horario.hora, 'success');
          return respuesta.horario;
        }));
    }

  }

  getHorarios(desde: number = 0) {

    const url = 'horario?desde=' + desde;
    return this.http.get(url);

  }

  getHorario(id: string) {

    const url = 'horario/';
    return this.http.get(url + id).pipe(
      map((respuesta: any) => respuesta.horario));

  }

  deleteHorario(id: string) {

    const url = 'horario/';
    return this.http.delete(url + id).pipe(
      map((respuesta => {
        Swal.fire('Horario borrado', 'El horario ha sido eliminado correctamente', 'success');
        return true;
      }))
    );
  }

  buscarHorario(termino: string) {
    const url = 'busqueda/coleccion/horarios/' + termino;

    return this.http.get(url)
      .pipe(
        map((respuesta: any) => respuesta.horarios)
      );
  }

}
