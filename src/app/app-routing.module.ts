import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizadorComponent } from "./visualizador/visualizador.component";
import { ElaboradorComponent } from "./elaborador/elaborador.component";
import { SolicitudComponent } from "./solicitud/solicitud.component";
import { OficiosComponent} from "./oficios/oficios.component"
const routes: Routes = [
   {path:"visualizador",component:VisualizadorComponent},
   {path:"elaborador",component:ElaboradorComponent},
   {path:"solicitud",component:SolicitudComponent},
   {path:"oficios",component:OficiosComponent} 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
