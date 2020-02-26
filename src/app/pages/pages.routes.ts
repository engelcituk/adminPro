import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component'; // engloba todas las paginas internas
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
import { LugaresComponent } from './administracion/lugares/lugares.component';
import { LugarComponent } from './administracion/lugares/lugar.component';

// para el buscador
import { BusquedaComponent } from './busqueda/busqueda.component';

// COmponentes configuración
import { HotelesComponent } from './configuracion/hoteles/hoteles.component';
import { HotelComponent } from './configuracion/hoteles/hotel.component';
import { HorariosComponent } from './configuracion/horarios/horarios.component';
import { HorarioComponent } from './configuracion/horarios/horario.component';
import { EstadoComponent } from './configuracion/estados/estado.component';
import { EstadosComponent } from './configuracion/estados/estados.component';
import { PermisosComponent } from './configuracion/permisos/permisos.component';
import { PermisoComponent } from './configuracion/permisos/permiso.component';
import { RolesComponent } from './configuracion/roles/roles.component';
import { RolComponent } from './configuracion/roles/rol.component';

import { LoginGuard, VerificaTokenGuard } from '../services/service.index';




const pageRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [VerificaTokenGuard],
        data: { titulo: 'Dashboard'}
      },
      { path: 'reportes', component: ReportesComponent,  data: { titulo: 'Reportes'} },
      { path: 'agenda', component: AgendaComponent,  data: { titulo: 'Agenda'} },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress'} },
      { path: 'graficas', component: GraficasComponent,  data: { titulo: 'Graficas'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema'} },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs'} },
      // area de administracion
      { path: 'agencias', component: AgenciasComponent, data: { titulo: 'Agencias' } },
      { path: 'agencias/:id', component: AgenciaComponent, data: { titulo: 'Crear/actualizar agencia' } },
      { path: 'paquetes', component: PaquetesComponent, data: { titulo: 'Paquetes' } },
      { path: 'paquetes/:id', component: PaqueteComponent, data: { titulo: 'Crear/actualizar paquete' } },
      { path: 'lugares', component: LugaresComponent, data: { titulo: 'Lugares' } },
      { path: 'lugares/:id', component: LugarComponent, data: { titulo: 'Crear/actualizar lugar' } },
      { path: 'clientes', component: ClientesComponent, data: { titulo: 'Clientes' } },
      { path: 'clientes/:id', component: ClienteComponent, data: { titulo: 'Crear/actualizar cliente' } },
      { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios' } },
      { path: 'usuarios/:id', component: UsuarioComponent, data: { titulo: 'Crear/actualizar usuarios' } },
      // para el buscador
      { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },

      // area de configuracion
      { path: 'hoteles', component: HotelesComponent, data: { titulo: 'Hoteles' }  },
      { path: 'hoteles/:id', component: HotelComponent, data: { titulo: 'Crear/actualizar hotel'} },
      { path: 'horarios', component: HorariosComponent, data: { titulo: 'Horarios' } },
      { path: 'horarios/:id', component: HorarioComponent, data: { titulo: 'Crear/actualizar horario' } },
      { path: 'estados', component: EstadosComponent, data: { titulo: 'Estados' } },
      { path: 'estados/:id', component: EstadoComponent, data: { titulo: 'Crear/actualizar estado' } },
      { path: 'roles', component: RolesComponent, data: { titulo: 'Roles' } },
      { path: 'roles/:id', component: RolComponent, data: { titulo: 'Crear/actualizar rol' } },
      { path: 'permisos', component: PermisosComponent, data: { titulo: 'Permisos' } },
      { path: 'permisos/:id', component: PermisoComponent, data: { titulo: 'Crear/actualizar permiso' } },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
