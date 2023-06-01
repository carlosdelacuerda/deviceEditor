import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { DevicesService } from './devices.service';
import { DeviceInterface } from '../interfaces/devices.interface';


describe('DevicesService', () => {
  let service: DevicesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [DevicesService]
    })
    .compileComponents();
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get list of devices', () => {
    const dummyDevices: DeviceInterface[] =[
      {
        "name": "device 1",
        "tags": [
          "tag1",
          "tag2"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "name": "device 2",
        "tags": [
          "tag1",
          "superLongTag"
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
      },
      {
        "name": "device 3",
        "tags": [],
        "description": ""
      }
    ];
    service.getAllDevices().subscribe(devices => {
        expect(devices.length).toBe(3);
        expect(devices).toEqual(dummyDevices);
    });
  });
});
