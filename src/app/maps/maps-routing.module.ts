import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZommRangePageComponent } from './pages/zomm-range-page/zomm-range-page.component';


const routes: Routes = [
  {
    path:'',
    component: MapsLayoutComponent,
    children:[
      { path: 'fullsceen', component: FullScreenPageComponent },
      { path: 'zoom-range', component: ZommRangePageComponent },
      { path: 'markers', component: MarkersPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'fullsceen' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MapsRoutingModule { }
