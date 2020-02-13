
import { Injectable } from '@angular/core';
import { Lugar } from '../../models/lugar.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  constructor(public http: HttpClient) {
    console.log('Servicio de lugar listo');
  }

  // funcion tanto para guardar POST y actualizar (PUT)
  saveLugar(lugar: Lugar) {
    let url = 'lugar';

    if (lugar._id) {
      // actualizo el lugar
      url += '/' + lugar._id;
      return this.http.put(url, lugar).pipe(
        map((respuesta: any) => {
          Swal.fire('Lugar actualizado', lugar.name, 'success');
          return respuesta.lugar;
        })
      );
    } else {
      // creo el lugar
      return this.http.post(url, lugar).pipe(
        map((respuesta: any) => {
          Swal.fire('Lugar creado', lugar.name, 'success');
          return respuesta.lugar;
        })
      );
    }
  }

  getLugares(desde: number = 0) {
    const url = 'lugar?desde=' + desde;
    return this.http.get(url);
  }

  getLugar(id: string) {
    const url = 'lugar/';
    return this.http
      .get(url + id)
      .pipe(map((respuesta: any) => respuesta.lugar));
  }

  deleteLugar(id: string) {
    const url = 'lugar/';
    return this.http.delete(url + id).pipe(
      map(respuesta => {
        Swal.fire(
          'Lugar borrado',
          'El lugar ha sido eliminado correctamente',
          'success'
        );
        return true;
      })
    );
  }

  buscarLugar(termino: string) {
    const url = 'busqueda/coleccion/lugares/' + termino;

    return this.http.get(url).pipe(map((respuesta: any) => respuesta.lugares));
  }
}
