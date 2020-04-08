import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizadorComponent } from "./visualizador/visualizador.component";
import { ElaboradorComponent } from "./elaborador/elaborador.component";
<<<<<<< HEAD
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { SolicitudesComponent } from './elaborador/solicitudes/solicitudes.component';
import { OficiosComponent } from './elaborador/oficios/oficios.component';
import { ActasComponent } from './elaborador/actas/actas.component';
import { MemorandumsComponent } from './elaborador/memorandums/memorandums.component';
import { HojaDeVidaComponent } from './elaborador/hoja-de-vida/hoja-de-vida.component';
=======
import { SolicitudComponent } from "./solicitud/solicitud.component";
import { OficiosComponent} from "./oficios/oficios.component"
>>>>>>> origin/master
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
   {path:"visualizador",component:VisualizadorComponent},
   {path:"elaborador",component:ElaboradorComponent},
<<<<<<< HEAD
   {path:"solicitudes",component:SolicitudesComponent},
   {path:"oficios",component:OficiosComponent},
   {path:"actas",component:ActasComponent},
   {path:"memorandums",component:MemorandumsComponent},
   {path:"hojasDeVida",component:HojaDeVidaComponent}
=======
   {path:"solicitud",component:SolicitudComponent},
   {path:"oficios",component:OficiosComponent} 
>>>>>>> origin/master
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
