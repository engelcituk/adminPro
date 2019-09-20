import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTES } from './app.routes';

// modulos
import { PageModule } from './pages/pages.module';

// temporal
import { FormsModule } from '@angular/forms';
// servicios
import { ServicesModule } from './services/services.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule,
    FormsModule,
    ServicesModule // este son los servicios, pero como es un modulo, va en los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
