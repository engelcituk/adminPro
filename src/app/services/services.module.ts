import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalEventoService } from './../components/modal-eventos/modal-evento.service';


import {
  SettingsService,
  SidebarService,
  HotelService,
  HorarioService,
  EventoService,
  EstadoService,
  UsuarioService,
  ClienteService,
  AgenciaService,
  PaqueteService,
  LugarService,
  PermisoService,
  RolService,
  LoginGuard,
  VerificaTokenGuard
} from './service.index';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    SettingsService,
    SidebarService,
    HotelService,
    HorarioService,
    EventoService,
    EstadoService,
    UsuarioService,
    ClienteService,
    AgenciaService,
    PaqueteService,
    LugarService,
    PermisoService,
    RolService,
    ModalEventoService,
    LoginGuard,
    VerificaTokenGuard
  ]
})
export class ServicesModule {}
