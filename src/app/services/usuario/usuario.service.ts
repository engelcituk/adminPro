import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { URL_SERVICIOS } from '../../../app/config/config';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = 'usuario'; // endpoint

  constructor(public http: HttpClient) {

    console.log('Servicio de usuarios cargado');

  }

  // funcion tanto para guardar POST y actualizar (PUT), funcional en el dashboard
  saveUsuario(usuario: Usuario) {

    let url = this.url;

    if (usuario._id) {
      // actualizo el dato
      url += '/' + usuario._id;
      return this.http.put(url, usuario).pipe(
        map((respuesta: any) => {
          Swal.fire('Usuario actualizado', usuario.name, 'success');
          return respuesta.usuario;
        }));

    } else {
      // creo el usuario
      return this.http.post(url, usuario).pipe(
        map((respuesta: any) => {
          Swal.fire('Usuario creado', usuario.name, 'success');
          return respuesta.usuario;
        }));
    }

  }
  // para registrar usuario antes de  poder hacer login
  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + this.url;

    return this.http.post(url, usuario).pipe(
      map((respuesta: any) => {
        Swal.fire('Usuario creado', usuario.name, 'success');
        return respuesta.usuario;
      }));

  }
  // para el login de usuario
  login(usuario: Usuario, recordar: boolean = false) {
    const url = URL_SERVICIOS + 'login';
    return this.http.post(url, usuario).pipe(
      map((respuesta: any) => {
        return respuesta;
      }));

  }
  getUsuarios(desde: number = 0) {

    const url = 'usuario?desde=' + desde;
    return this.http.get(url);

  }
  // obtener un usuario
  getUsuario(id: string) {

    const url = URL_SERVICIOS + this.url + '/';

    return this.http.get(url + id).pipe(
      map((respuesta: any) => respuesta.usuario));
  }


  // borrar a un usuario
  deleteUsuario(id: string) {

    const url = 'usuario/';
    return this.http.delete(url + id).pipe(
      map((respuesta => {
        Swal.fire('Usuario borrado', 'El usuario ha sido eliminado correctamente', 'success');
        return true;
      }))
    );

  }
  buscarUsuario(termino: string) {
    const url = 'busqueda/coleccion/usuarios/' + termino;

    return this.http.get(url)
      .pipe(
        map((respuesta: any) => respuesta.usuarios)
      );
  }
}
