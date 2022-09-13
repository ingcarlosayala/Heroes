import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { HeroesRoutingModule } from './heroes-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { TarjetaHeroeComponent } from './components/tarjeta-heroe/tarjeta-heroe.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ImagenPipe,
    TarjetaHeroeComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ]
})
export class HeroesModule { }
