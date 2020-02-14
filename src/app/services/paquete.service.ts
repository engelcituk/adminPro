import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Paquete } from '../models/paquete.model';


@Injectable({
  providedIn: 'root'
})
export class PaqueteService {
  url: string = 'paquete'; // endpoint

  constructor(public http: HttpClient) {
    console.log('servicio de paquetes cargado');
  }

  getPaquetes(desde: number = 0) {
    const url = 'paquete?desde=' + desde;
    return this.http.get(url);
  }

  getPaquete(id: string) {
    const url = 'paquete/';
    return this.http
      .get(url + id)
      .pipe(map((respuesta: any) => respuesta.paquete));
  }

  savePaquete(paquete: Paquete) {
    let url = 'paquete';

    if (paquete._id) {
      // actualizo el dato
      url += '/' + paquete._id;
      return this.http.put(url, paquete).pipe(
        map((respuesta: any) => {
          Swal.fire('Paquete actualizado', paquete.name, 'success');
          return respuesta.paquete;
        })
      );
    } else {
      // creo el paquete
      return this.http.post(url, paquete).pipe(
        map((respuesta: any) => {
          Swal.fire('Paquete creado', paquete.name, 'success');
          return respuesta.paquete;
        })
      );
    }
  }
  // busqueda de paquetes
  buscarPaquete(termino: string) {
    const url = 'busqueda/coleccion/paquetes/' + termino;

    return this.http.get(url).pipe(map((respuesta: any) => respuesta.paquetes));
  }
  // para borrar un paquete
  deletePaquete(id: string) {
    const url = 'paquete/';
    return this.http.delete(url + id).pipe(
      map(respuesta => {
        Swal.fire(
          'Paquete borrado',
          'El paquete ha sido eliminado correctamente',
          'success'
        );
        return true;
      })
    );
  }
}
