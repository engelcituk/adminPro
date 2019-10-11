import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agencia } from '../../models/agencia.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de agencias listo');
  }

  // funcion tanto para guardar POST y actualizar (PUT)
  saveAgencia(agencia: Agencia) {

    let url = 'agencia';

    if (agencia._id) {
      // actualizo el dato
      url += '/' + agencia._id;
      return this.http.put(url, agencia).pipe(
        map((respuesta: any) => {
          Swal.fire('Agencia actualizado', agencia.name, 'success');
          return respuesta.agencia;
        }));

    } else {
      // creo la agencia
      return this.http.post(url, agencia).pipe(
        map((respuesta: any) => {
          Swal.fire('Agencia creado', agencia.name, 'success');
          return respuesta.agencia;
        }));
    }

  }

  getAgencias(desde: number = 0) {

    const url = 'agencia?desde=' + desde;
    return this.http.get(url);

  }
  // obtener un agencia
  getAgencia(id: string) {
    const url = 'agencia/';
    return this.http.get(url + id).pipe(
      map((respuesta: any) => respuesta.agencia));
  }

  buscarAgencia(termino: string) {
    const url = 'busqueda/coleccion/agencias/' + termino;

    return this.http.get(url)
      .pipe(
        map((respuesta: any) => respuesta.agencias)
      );
  }
  // borrar a un agencia
  deleteAgencia(id: string) {

    const url = 'agencia/';
    return this.http.delete(url + id).pipe(
      map((respuesta => {
        Swal.fire('Agencia borrada', 'La agencia ha sido eliminada correctamente', 'success');
        return true;
      }))
    );

  }
}
