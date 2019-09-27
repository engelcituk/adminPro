import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// importo rutas hijas
import { PAGES_ROUTES } from './pages.routes';


import { SharedModule } from './shared/shared.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ReportesComponent } from './dashboard/reportes/reportes.component';
import { AgendaComponent } from './dashboard/agenda/agenda.component';
import { ProgressComponent } from './dashboard/progress/progress.component';
import { GraficasComponent } from './dashboard/graficas/graficas.component';

// temporal
import { IncrementadorComponent } from './../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './dashboard/promesas/promesas.component';
import { RxjsComponent } from './dashboard/rxjs/rxjs.component';
import { HotelesComponent } from './configuracion/hoteles/hoteles.component';
import { HotelComponent } from './configuracion/hoteles/hotel.component';
import { HorariosComponent } from './configuracion/horarios/horarios.component';
import { HorarioComponent } from './configuracion/horarios/horario.component';


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
      HorarioComponent
    ],
  exports: [
      DashboardComponent,
      ReportesComponent,
      AgendaComponent
    ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
providers: []
})
export class PageModule {}
