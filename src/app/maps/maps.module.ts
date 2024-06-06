import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Configuración para cargar los mapas
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb25yZyIsImEiOiJjbHgyZ3R0NDAwa2NyMmtxNmNnam00dGk1In0.gJw5BBCNeo3gvHJYW-KQig';

import { MapsRoutingModule } from './maps-routing.module';

import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZommRangePageComponent } from './pages/zomm-range-page/zomm-range-page.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZommRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ],
})
export class MapsModule { }
