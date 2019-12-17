import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/service.index';
import { Cliente } from './../../../models/cliente.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean;

  constructor(public clienteService: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  // cargar clientes
  getClientes() {

    this.cargando = true;

    this.clienteService.getClientes(this.desde)
      .subscribe((respuesta: any) => {
        // console.log(respuesta.clientes);
        this.clientes = respuesta.clientes;
        this.totalRegistros = respuesta.total;
        this.cargando = false;

      });
  }
  // para el funcionamiento de los botones de paginado <- anterioes-siguientes->
  cambiarDesde(valor: number) {

    const desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.getClientes();
  }

  // buscar a un cliente
  buscarCliente(termino: string) {

    if (termino.length <= 0) {
      this.getClientes();
      return;
    }

    this.cargando = true;

    this.clienteService.buscarCliente(termino).subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
      this.cargando = false;

    });

  }
// para borrar a un cliente
  borrarCliente(cliente: Cliente, indice: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `De borrar a ${cliente._id}`,
      type: 'question',
      cancelButtonColor: '#DD6B55',
      showConfirmButton: true,
      showCancelButton: true
    }).then(borrar => {
      if (borrar.value) {
        this.clientes.splice(indice, 1);

        this.clienteService.deleteCliente(cliente._id)
          .subscribe(borrado => {
            console.log(borrado);
            this.getClientes();
          }
          );
      }
    });
  }
}
