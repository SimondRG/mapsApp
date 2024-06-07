import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsModule )
  },
  {
    path: 'alone',
    loadComponent: () => import('./alone/page/alone-page/alone-page.component')
      .then( m => m.AlonePageComponent ) // Carga perezosa el componente standalone
  },
  {
    path:'**',
    redirectTo: 'maps'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
