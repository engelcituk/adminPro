import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {
  SettingsService,
  SharedService,
  SidebarService,
  HotelService,
  HorarioService,
  EventoService,
  EstadoService,
  UsuarioService,
  ClienteService
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
    ClienteService
  ]
})
export class ServicesModule { }
