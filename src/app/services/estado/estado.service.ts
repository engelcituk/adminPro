import { Injectable } from '@angular/core';
import { Estado } from '../../models/estado.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de estados listo');
  }

  // funcion tanto para guardar POST y actualizar (PUT)
  saveEstado(estado: Estado) {

    let url = 'estado';

    if (estado._id) {
      // actualizo el estado
      url += '/' + estado._id;
      return this.http.put(url, estado).pipe(
        map((respuesta: any) => {
          Swal.fire('Estado actualizado', estado.estado, 'success');
          return respuesta.estado;
        }));

    } else {
      // creo el estado
      return this.http.post(url, estado).pipe(
        map((respuesta: any) => {
          Swal.fire('Estado creado', estado.estado, 'success');
          return respuesta.estado;
        }));
    }

  }

  getEstados(desde: number = 0) {

    const url = 'estado?desde=' + desde;
    return this.http.get(url);

  }

  getEstado(id: string) {

    const url = 'estado/';
    return this.http.get(url + id).pipe(
      map((respuesta: any) => respuesta.estado));

  }

  deleteEstado(id: string) {

    const url = 'estado/';
    return this.http.delete(url + id).pipe(
      map((respuesta => {
        Swal.fire('Estado borrado', 'El estado ha sido eliminado correctamente', 'success');
        return true;
      }))
    );
  }

  buscarEstado(termino: string) {
    const url = 'busqueda/coleccion/estados/' + termino;

    return this.http.get(url)
      .pipe(
        map((respuesta: any) => respuesta.estados)
      );
  }

}
