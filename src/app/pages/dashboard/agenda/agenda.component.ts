import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
// import { Observable } from 'rxjs';
// import { NgForm } from '@angular/forms';
import '../../../../../node_modules/fullcalendar/dist/locale/es';


import { EventoService } from './../../../services/service.index';
import { ModalEventoService } from '../../../components/modal-eventos/modal-evento.service';
import { EventoModel } from '../../../models/evento.model';
import * as $ from 'jquery';
// import Swal from 'sweetalert2';
import 'fullcalendar';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styles: []
})
export class AgendaComponent implements OnInit {
  // evento = new EventoModel();
  fecha: any;
  eventos: EventoModel[] = [];
  cargando = false;

  private mdlSampleIsOpen;
  modalOculto: string = '';


  constructor(private router: Router, private eventoService: EventoService, public modalEventoService: ModalEventoService) { }

  ngOnInit() {
    this.cargando = true;
    this.eventoService.getEventos().subscribe((respuesta: any ) => {
      this.eventos = respuesta.eventos;
      this.cargarCalendario();
      this.cargando = false;
      this.modalOculto = '';
    });
  }
  cargarCalendario() {
    setTimeout(() => {
      $('#calendar').fullCalendar({
        header: {
          right: 'prev,next today',
          center: 'title',
          left: 'month,agendaWeek,agendaDay'
        },
        navLinks: true,
        editable: true,
        eventLimit: true,
        events: this.eventos,  // request to load events

        dayClick: (date) => {
          this.fecha = date.format();
          this.diaClick(date, this.fecha);
        },
        eventClick: (event) => {
          console.log('hiciste clic', event.color);

        }

      });
    }, 100);
  }

  diaClick(date, fecha) {
    if (moment().format('YYYY-MM-DD') === date.format('YYYY-MM-DD') || date.isAfter(moment())) {
      console.log('Días cool');
      this.modalEventoService.mostrarModal('hola', 'hola');
    } else {
      // Else part is for past dates
      console.log('no puedes crear eventos para dias pasados a hoy');
    }
  }
  

  // deleteEvento(evento: EventoModel, indice: number) {

  //   Swal.fire({
  //     title: '¿Está seguro ?',
  //     text: `Seguro de borrar el evento "${evento.title}"`,
  //     type: 'question',
  //     showConfirmButton: true,
  //     showCancelButton: true,
  //   }).then(respuesta => {
  //     if (respuesta.value) {
  //       this.eventos.splice(indice, 1); // borro de la tabla
  //       this.eventoService.deleteEvento(evento.id).subscribe();
  //     }
  //   });
  // }
  // openModalEditar(evento: EventoModel) {
  //   const id = evento.id;
  //   this.eventoService.getEvento(evento.id, evento.fechaEvento).subscribe((respuesta: EventoModel) => {
  //     this.evento = respuesta;
  //     this.evento.id = id;
  //   });
  //   this.openModal(true);
  // }
  // private openModal(open: boolean): void {
  //   this.mdlSampleIsOpen = open;
  // }
  // guardarEvento(form: NgForm) {

  //   // console.log(form);
  //   // console.log(this.evento);
  //   if (form.invalid) {
  //     console.log('formulario invalido');
  //     return;
  //   }
  //   Swal.fire({
  //     title: 'Espere',
  //     text: 'Guardando información',
  //     type: 'info',
  //     allowOutsideClick: false
  //   });
  //   Swal.showLoading();

  //   let peticion: Observable<any>;


  //   if (this.evento.id) { // si tiene id el evento lo edito
  //     peticion = this.eventoService.actualizarEvento(this.evento);
  //   } else {
  //     this.evento.start = this.evento.fechaEvento + 'T' + this.getHour();
  //     peticion = this.eventoService.crearEvento(this.evento);
  //   }

  //   peticion.subscribe(respuesta => {
  //     Swal.fire({
  //       title: this.evento.title,
  //       text: 'Se actualizó correctamente',
  //       type: 'success'
  //     });

  //   });
  // }
  getHour() {
    const date = new Date();
    const segundos = date.getSeconds();
    const minutos = date.getMinutes();
    const hora = date.getHours();

    return hora + ':' + minutos + ':' + segundos;

  }
}



