import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTES } from './app.routes';

// modulos
import { PageModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, APP_ROUTES, PageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
