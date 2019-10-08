import { Injectable } from '@angular/core';
import { Horario } from '../../models/horario.model';
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

    const url = 'horario';

    if (horario._id) {
      // actualizo el horario
      return this.http.post(url, horario).pipe(
        map((respuesta: any) => {
          Swal.fire('Hotel actualizado', horario.hora, 'success');
          return respuesta.horario;
        }));

    } else {
      // creo el horario
      return this.http.post(url, horario).pipe(
        map((respuesta: any) => {
          Swal.fire('Hotel creado', horario.hora, 'success');
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
        Swal.fire('Horario borrado', 'El horario a sido eliminado correctamente', 'success');
        return true;
      }))
    );
  }

}
