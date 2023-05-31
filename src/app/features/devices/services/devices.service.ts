import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceInterface } from '../interfaces/devices.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {


  constructor(
    private http: HttpClient
  ) { }

  public getAllDevices(): Observable<DeviceInterface[]> {
    return this.http.get<DeviceInterface[]>('../../../assets/data/devices.json');
  }
}
