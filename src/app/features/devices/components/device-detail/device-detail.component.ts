import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceInterface } from '../../interfaces/devices.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { DevicesService } from '../../services/devices.service';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {

  tags: Tag[] = [];
  getDevice: any;
  name: string = '';
  description: string = '';

  device: DeviceInterface = {
    name: '',
    tags: [],
    description: ''
  }

  formGroup: FormGroup = new FormGroup({});
  

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private deviceService: DevicesService
  ){
    this.receiverParameters()
  }

  ngOnInit(): void {
    
    this.getDevice = this.device;
    this.name = this.getDevice.device.name;
    this.description = this.getDevice.device.description;
    this.getDevice.device.tags.forEach((tag:string) => {
      this.tags.push({name: tag})
    });
    this.buildForm();
  }

  receiverParameters() {
    this.device = this.router.getCurrentNavigation()?.extras.state as DeviceInterface;
  }

  public buildForm() {
    this.formGroup = this.formBuilder.group({
      name: new FormControl(this.name, [Validators.required]),
      description: new FormControl(this.description),
      tags: new FormControl('')  
    });
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: Tag, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove tag if it no longer has a name
    if (!value) {
      this.remove(tag);
      return;
    }

    // Edit existing tag
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index].name = value;
    }
  }


  saveDevice() {
    this.deviceService.postDevice(this.formGroup.value).subscribe()
  }

}
