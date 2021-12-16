import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioAComponent } from './components/paginasAdmin/inicio-a/inicio-a.component';
import { InicioUComponent } from './components/paginasUsuario/inicio-u/inicio-u.component';
import { EscanearComponent } from './components/paginasUsuario/escanear/escanear.component';
import { ReservarComponent } from './components/paginasUsuario/reservar/reservar.component';
import { VerAforoComponent } from './components/paginasUsuario/ver-aforo/ver-aforo.component';
import { TrazabilidadComponent } from './components/paginasAdmin/trazabilidad/trazabilidad.component';
import { ConfigAforoComponent } from './components/paginasAdmin/config-aforo/config-aforo.component';
import { RegistroComponent } from './components/paginasAdmin/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarComponent } from './components/paginasAdmin/registro/agregar/agregar.component';
import { ModificarComponent } from './components/paginasAdmin/registro/modificar/modificar.component';
import { LoginComponent } from './components/paginasUsuario/login/login.component';
import { EscanearSComponent } from './components/paginasUsuario/escanear-s/escanear-s.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioAComponent,
    InicioUComponent,
    EscanearComponent,
    ReservarComponent,
    VerAforoComponent,
    TrazabilidadComponent,
    ConfigAforoComponent,
    RegistroComponent,
    AgregarComponent,
    ModificarComponent,
    LoginComponent,
    EscanearSComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
