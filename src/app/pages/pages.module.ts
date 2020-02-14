import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables'; // module para datatables

// importo rutas hijas
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from './shared/shared.module';

import { PagesComponent } from './pages.component';

// subpaginas
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ReportesComponent } from './dashboard/reportes/reportes.component';
import { AgendaComponent } from './dashboard/agenda/agenda.component';
import { ProgressComponent } from './dashboard/progress/progress.component';
import { GraficasComponent } from './dashboard/graficas/graficas.component';

import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './dashboard/promesas/promesas.component';
import { RxjsComponent } from './dashboard/rxjs/rxjs.component';
import { HotelesComponent } from './configuracion/hoteles/hoteles.component';
import { HotelComponent } from './configuracion/hoteles/hotel.component';
import { HorariosComponent } from './configuracion/horarios/horarios.component';
import { HorarioComponent } from './configuracion/horarios/horario.component';
import { ClientesComponent } from './administracion/clientes/clientes.component';
import { ClienteComponent } from './administracion/clientes/cliente.component';
import { UsuariosComponent } from './administracion/usuarios/usuarios.component';
import { UsuarioComponent } from './administracion/usuarios/usuario.component';
import { PaquetesComponent } from './administracion/paquetes/paquetes.component';
import { PaqueteComponent } from './administracion/paquetes/paquete.component';
import { AgenciaComponent } from './administracion/agencias/agencia.component';
import { AgenciasComponent } from './administracion/agencias/agencias.component';
import { EstadosComponent } from './configuracion/estados/estados.component';
import { EstadoComponent } from './configuracion/estados/estado.component';
import { LugaresComponent } from './administracion/lugares/lugares.component';
import { LugarComponent } from './administracion/lugares/lugar.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ModalEventosComponent } from '../components/modal-eventos/modal-eventos.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ReportesComponent,
    AgendaComponent,
    ProgressComponent,
    IncrementadorComponent,
    GraficasComponent,
    GraficoDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    HotelesComponent,
    HotelComponent,
    HorariosComponent,
    HorarioComponent,
    ClientesComponent,
    ClienteComponent,
    UsuariosComponent,
    UsuarioComponent,
    PaquetesComponent,
    PaqueteComponent,
    AgenciaComponent,
    AgenciasComponent,
    EstadosComponent,
    EstadoComponent,
    LugaresComponent,
    LugarComponent,
    BusquedaComponent,
    ModalEventosComponent
  ],
  exports: [DashboardComponent, ReportesComponent, AgendaComponent],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    DataTablesModule // para hacer funcionar datatable
  ],
  providers: []
})
export class PageModule {}
