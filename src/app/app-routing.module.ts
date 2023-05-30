import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'devices',
    loadChildren: () => import('./features/devices/devices.module').then(m => m.DevicesModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./features/support/support.module').then(m => m.SupportModule)
  }
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
