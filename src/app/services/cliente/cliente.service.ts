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

  getClientes(desde: number = 0) {

    const url = 'cliente?desde=' + desde;
    return this.http.get(url);

  }
  buscarCliente(termino: string) {
    const url = 'busqueda/coleccion/clientes/' + termino;

    return this.http.get(url)
      .pipe(
        map((respuesta: any) => respuesta.clientes)
      );
  }
  // borrar a un usuario
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
