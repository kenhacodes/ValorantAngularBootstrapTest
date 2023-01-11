import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {InfoAdminComponent} from "./components/info-admin/info-admin.component";
import {CardComponent} from "./components/card/card.component";
import {InfoCardComponent} from "./components/info-card/info-card.component";


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: InfoAdminComponent,
    pathMatch: 'full'
  },
  {
    path: 'agentes',
    component: CardComponent,
    pathMatch: 'full'
  },
  {
    path: 'agentes/:uuid',
    component: InfoCardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
