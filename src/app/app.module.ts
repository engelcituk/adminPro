import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTES } from './app.routes';

// modulos
import { PageModule } from './pages/pages.module';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// servicios
import { ServicesModule } from './services/services.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule,
    FormsModule,
    ReactiveFormsModule, // para formulario reactivos, se usa en el register de usuarios antes de entrar al dashboard
    ServicesModule // este son los servicios, pero como es un modulo, va en los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
