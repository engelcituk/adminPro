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
import { HotelesComponent } from './configuracion/cHoteles/hoteles/hoteles.component';
import { HotelComponent } from './configuracion/cHoteles/hotel/hotel.component';
import { HorariosComponent } from './configuracion/cHorarios/horarios/horarios.component';
import { HorarioComponent } from './configuracion/cHorarios/horario/horario.component';

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
      // area de configuracion
      { path: 'hoteles', component: HotelesComponent, data: { titulo: 'Hoteles' }  },
      { path: 'hotel/:id', component: HotelComponent, data: { titulo: 'Editar hotel' } },
      { path: 'horarios', component: HorariosComponent, data: { titulo: 'Horarios' } },
      { path: 'horarios/create', component: HorarioComponent, data: { titulo: 'Crear horario' } },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pageRoutes);
