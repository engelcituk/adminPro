import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NopagefoundComponent } from './pages/shared/nopagefound/nopagefound.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '**', component: NopagefoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});

