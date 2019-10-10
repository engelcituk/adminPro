import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../models/Cliente.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de clientes listo');
  }

  // funcion tanto para guardar POST y actualizar (PUT)
  saveCliente(cliente: Cliente) {

    let url = 'cliente';

    if (cliente._id) {
      // actualizo el dato
      url += '/' + cliente._id;
      return this.http.put(url, cliente).pipe(
        map((respuesta: any) => {
          Swal.fire('Cliente actualizado', cliente.email, 'success');
          return respuesta.cliente;
        }));

    } else {
      // creo el cliente
      return this.http.post(url, cliente).pipe(
        map((respuesta: any) => {
          Swal.fire('Cliente creado', cliente.email, 'success');
          return respuesta.cliente;
        }));
    }

  }

  getClientes(desde: number = 0) {

    const url = 'cliente?desde=' + desde;
    return this.http.get(url);

  }
  // obtener un cliente
  getCliente(id: string) {
    const url = 'cliente/';
    return this.http.get(url + id).pipe(
      map((respuesta: any) => respuesta.cliente));
  }

  buscarCliente(termino: string) {
    const url = 'busqueda/coleccion/clientes/' + termino;

    return this.http.get(url)
      .pipe(
        map((respuesta: any) => respuesta.clientes)
      );
  }
  // borrar a un cliente
  deleteCliente(id: string) {

    const url = 'cliente/';
    return this.http.delete(url + id).pipe(
      map((respuesta => {
        Swal.fire('Cliente borrado', 'El cliente ha sido eliminado correctamente', 'success');
        return true;
      }))
    );

  }
}
