import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PagesComponent } from './componentes/pages/pages.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { AboutComponent } from './componentes/pages/about/about.component';
import { ItemComponent } from './componentes/pages/item/item.component';
import { BusquedaComponent } from './componentes/pages/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PagesComponent,
    HomeComponent,
    AboutComponent,
    ItemComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
