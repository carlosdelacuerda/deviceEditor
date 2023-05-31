import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';


const routes: Routes = [
  {
    path: '',
    component: DevicesListComponent
  },
  {
    path: '**',
    component: DeviceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }