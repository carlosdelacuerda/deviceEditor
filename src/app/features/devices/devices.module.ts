import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { DevicesRoutingModule } from './devices-routing.modue';
import {MatTableModule} from '@angular/material/table';
import { CutTags } from './pipes/cut-tags.pipe';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    DevicesListComponent,
    CutTags,
    DeviceDetailComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    DevicesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class DevicesModule { }
