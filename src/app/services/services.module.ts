import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalEventoService } from './../components/modal-eventos/modal-evento.service';


import {
  SettingsService,
  SharedService,
  SidebarService,
  HotelService,
  HorarioService,
  EventoService,
  EstadoService,
  UsuarioService,
  ClienteService,
  AgenciaService,
  LoginGuard,
  VerificaTokenGuard
} from './service.index';


@NgModule({
  declarations: [],
  imports: [
  CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    HotelService,
    HorarioService,
    EventoService,
    EstadoService,
    UsuarioService,
    ClienteService,
    AgenciaService,
    ModalEventoService,
    LoginGuard,
    VerificaTokenGuard
  ]
})
export class ServicesModule { }
