import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioUComponent } from './components/paginasUsuario/inicio-u/inicio-u.component';
import { InicioAComponent } from './components/paginasAdmin/inicio-a/inicio-a.component';
import { RegistroComponent } from './components/paginasAdmin/registro/registro.component';
import { ModificarComponent } from './components/paginasAdmin/registro/modificar/modificar.component';
import { AgregarComponent } from './components/paginasAdmin/registro/agregar/agregar.component';
import { LoginComponent } from './components/paginasUsuario/login/login.component';
import { EscanearComponent } from './components/paginasUsuario/escanear/escanear.component';
import { EscanearSComponent } from './components/paginasUsuario/escanear-s/escanear-s.component';
import { VerAforoComponent } from './components/paginasUsuario/ver-aforo/ver-aforo.component';
import { TrazabilidadComponent } from './components/paginasAdmin/trazabilidad/trazabilidad.component';
import { ReservarComponent } from './components/paginasUsuario/reservar/reservar.component';
import { ConfigAforoComponent} from './components/paginasAdmin/config-aforo/config-aforo.component';

const routes: Routes = [
  { path: '', component:InicioUComponent},
  { path: 'inicioAdmin', component:InicioAComponent},
  { path: 'registro', component:RegistroComponent},
  { path: 'editar/:rut', component:ModificarComponent},
  { path: 'agregar', component:AgregarComponent},
  { path: 'iniciarSesion', component:LoginComponent},
  { path: 'escanear', component:EscanearComponent}, 
  { path: 'escanearS', component:EscanearSComponent},
  { path: 'verAforo', component:VerAforoComponent },
  { path: 'trazabilidad', component:TrazabilidadComponent},
  { path: 'reservar', component: ReservarComponent},
  { path: 'config', component: ConfigAforoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
