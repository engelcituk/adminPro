import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ReportesComponent } from './dashboard/reportes/reportes.component';
import { AgendaComponent } from './dashboard/agenda/agenda.component';
import { ProgressComponent } from './dashboard/progress/progress.component';
import { GraficasComponent } from './dashboard/graficas/graficas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './dashboard/promesas/promesas.component';
import { RxjsComponent } from './dashboard/rxjs/rxjs.component';

// componentes administracion
import { AgenciaComponent } from './administracion/agencias/agencia.component';
import { AgenciasComponent } from './administracion/agencias/agencias.component';
import { PaqueteComponent } from './administracion/paquetes/paquete.component';
import { PaquetesComponent } from './administracion/paquetes/paquetes.component';
import { ClienteComponent } from './administracion/clientes/cliente.component';
import { ClientesComponent } from './administracion/clientes/clientes.component';
import { UsuarioComponent } from './administracion/usuarios/usuario.component';
import { UsuariosComponent } from './administracion/usuarios/usuarios.component';

// para el buscador
import { BusquedaComponent } from './busqueda/busqueda.component';

// COmponentes configuración
import { HotelesComponent } from './configuracion/hoteles/hoteles.component';
import { HotelComponent } from './configuracion/hoteles/hotel.component';
import { HorariosComponent } from './configuracion/horarios/horarios.component';
import { HorarioComponent } from './configuracion/horarios/horario.component';
import { EstadoComponent } from './configuracion/estados/estado.component';
import { EstadosComponent } from './configuracion/estados/estados.component';
import { LugarComponent } from './administracion/lugares/lugar.component';
import { LugaresComponent } from './administracion/lugares/lugares.component';


const pageRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
      { path: 'reportes', component: ReportesComponent,  data: { titulo: 'Reportes'} },
      { path: 'agenda', component: AgendaComponent,  data: { titulo: 'Agenda'} },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
      { path: 'graficas', component: GraficasComponent,  data: { titulo: 'Graficas'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema'} },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'} },
      // area de administracion
      { path: 'agencias', component: AgenciasComponent, data: { titulo: 'Agencias' } },
      { path: 'agencia/:id', component: AgenciaComponent, data: { titulo: 'Crear/actualizar agencia' } },
      { path: 'paquetes', component: PaquetesComponent, data: { titulo: 'Paquetes' } },
      { path: 'paquete/:id', component: PaqueteComponent, data: { titulo: 'Crear/actualizar paquete' } },
      { path: 'lugares', component: LugaresComponent, data: { titulo: 'Lugares' } },
      { path: 'lugar/:id', component: LugarComponent, data: { titulo: 'Crear/actualizar lugar' } },
      { path: 'clientes', component: ClientesComponent, data: { titulo: 'Clientes' } },
      { path: 'cliente/:id', component: ClienteComponent, data: { titulo: 'Crear/actualizar cliente' } },
      { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios' } },
      { path: 'usuario/:id', component: UsuarioComponent, data: { titulo: 'Crear/actualizar usuarios' } },
      // para el buscador
      { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },


      // area de configuracion
      { path: 'hoteles', component: HotelesComponent, data: { titulo: 'Hoteles' }  },
      { path: 'hotel/:id', component: HotelComponent, data: { titulo: 'Crear/actualizar hotel'} },
      { path: 'horarios', component: HorariosComponent, data: { titulo: 'Horarios' } },
      { path: 'horario/:id', component: HorarioComponent, data: { titulo: 'Crear/actualizar horario' } },
      { path: 'estados', component: EstadosComponent, data: { titulo: 'Estados' } },
      { path: 'estado/:id', component: EstadoComponent, data: { titulo: 'Crear/actualizar estado' } },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
