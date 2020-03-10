import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rol } from '../models/rol.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de roles listo');
  }

  // funcion tanto para guardar POST y actualizar (PUT)
  saveRol(rol: Rol) {

    let url = 'rol';

    if (rol._id) {
      // actualizo el dato
      url += '/' + rol._id;
      return this.http.put(url, rol).pipe(
        map((respuesta: any) => {
          Swal.fire('Rol actualizado', rol.name, 'success');
          return respuesta.rol;
        }));

    } else {
      // creo el rol
      return this.http.post(url, rol).pipe(
        map((respuesta: any) => {
          Swal.fire('Rol creado', rol.name, 'success');
          return respuesta.rol;
        }));
    }
  }

  getRoles(desde: number = 0) {

    const url = 'rol?desde=' + desde;
    return this.http.get(url);

  }
  // obtener un rol
  getRol(id: string) {
    const url = 'rol/';
    return this.http.get(url + id).pipe(
      map((respuesta: any) => respuesta.rol));
  }

  buscarRol(termino: string) {
    const url = 'busqueda/coleccion/roles/' + termino;

    return this.http.get(url)
      .pipe(
        map((respuesta: any) => respuesta.roles)
      );
  }
  // borrar a un rol
  deleteRol(id: string) {

    const url = 'rol/';
    return this.http.delete(url + id).pipe(
      map((respuesta => {
        Swal.fire('Rol borrada', 'El rol ha sido eliminado correctamente', 'success');
        return true;
      }))
    );

  }
}
