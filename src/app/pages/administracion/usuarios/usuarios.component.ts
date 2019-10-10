import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/service.index';
import { Usuario } from './../../../models/usuario.model';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  // cargar usuarioes
  getUsuarios() {

    this.cargando = true;

    this.usuarioService.getUsuarios(this.desde)
      .subscribe((respuesta: any) => {
        // console.log(respuesta.usuarios);
        this.usuarios = respuesta.usuarios;
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
    this.getUsuarios();
  }
  // buscar a un usuario
  buscarUsuario(termino: string) {

    if (termino.length <= 0) {
      this.getUsuarios();
      return;
    }

    this.cargando = true;

    this.usuarioService.buscarUsuario(termino).subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      this.cargando = false;

    });

  }
  borrarUsuario(usuario: Usuario, indice: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `De borrar a ${usuario.name}`,
      type: 'question',
      cancelButtonColor: '#DD6B55',
      showConfirmButton: true,
      showCancelButton: true
    }).then(borrar => {
      if (borrar.value) {
        this.usuarios.splice(indice, 1);

        this.usuarioService.deleteUsuario(usuario._id)
          .subscribe(borrado => {
            console.log(borrado);
            this.getUsuarios();
          }
          );
      }
    });
  }
}
