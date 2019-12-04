import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../../app/config/config';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = 'usuario'; // endpoint
  // propiedades para verificar que un usuario está logueado
  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
    ) {
    console.log('Servicio de usuarios cargado');
    this.cagarDatosStorage();

  }

  estaLogueado() {
    return( this.token.length > 5 ) ? true : false;
  }
  // cargar datos desde el storage
  cagarDatosStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
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

    if (recordar) {
      localStorage.setItem('username', usuario.usuario);
    } else {
      localStorage.removeItem('username');
    }

    return this.http.post(url, usuario).pipe(
      map((respuesta: any) => {
        this.guardarEnStorageDatosUser(respuesta.id, respuesta.token, respuesta.usuario);
        return true; // se logueó, Sí
      }));

  }
  // metodo para el logout
  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }
  // guardar en storage los datos del usuario al hacer login
  guardarEnStorageDatosUser(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;

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
