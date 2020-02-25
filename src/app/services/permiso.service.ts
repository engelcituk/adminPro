
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Permiso } from '../models/permiso.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de permisos listo');
  }

  // funcion tanto para guardar POST y actualizar (PUT)
  savePermiso(permiso: Permiso) {

    let url = 'permiso';

    if (permiso._id) {
      // actualizo el dato
      url += '/' + permiso._id;
      return this.http.put(url, permiso).pipe(
        map((respuesta: any) => {
          Swal.fire('Permiso actualizado', permiso.name, 'success');
          return respuesta.permiso;
        }));

    } else {
      // creo la permiso
      return this.http.post(url, permiso).pipe(
        map((respuesta: any) => {
          Swal.fire('Permiso creado', permiso.name, 'success');
          return respuesta.permiso;
        }));
    }

  }

  getPermisos(desde: number = 0) {

    const url = 'permiso?desde=' + desde;
    return this.http.get(url);

  }
  // obtener un permiso
  getPermiso(id: string) {
    const url = 'permiso/';
    return this.http.get(url + id).pipe(
      map((respuesta: any) => respuesta.permiso));
  }

  buscarPermiso(termino: string) {
    const url = 'busqueda/coleccion/permisos/' + termino;

    return this.http.get(url)
      .pipe(
        map((respuesta: any) => respuesta.permisos)
      );
  }
  // borrar a un permiso
  deletePermiso(id: string) {

    const url = 'permiso/';
    return this.http.delete(url + id).pipe(
      map((respuesta => {
        Swal.fire('Permiso borrada', 'La permiso ha sido eliminada correctamente', 'success');
        return true;
      }))
    );

  }
}
