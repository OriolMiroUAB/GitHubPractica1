import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/pages/home/home.component';
import { AboutComponent } from './componentes/pages/about/about.component';
import { ItemComponent } from './componentes/pages/item/item.component';
import { BusquedaComponent } from './componentes/pages/busqueda/busqueda.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'buscar/:textBusq', component: BusquedaComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
