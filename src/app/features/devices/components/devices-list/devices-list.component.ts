import { Component, OnInit, ViewChild } from '@angular/core';
import { DevicesService } from '../../services/devices.service';
import { DeviceInterface } from '../../interfaces/devices.interface';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {


  tagsList = [];
  displayedColumns: string[] = ['name', 'tags', 'description', 'light'];
  dataSource = new MatTableDataSource();

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(
    private devicesService: DevicesService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.devicesService.getAllDevices().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  goToDetail(device: DeviceInterface) {
    // remove white space to create a friendly url
    const name = device.name.replace(/\s+/g, '-');
    // navigate to detail page
    this.router.navigate(['/devices/' + name + '/'], {
      // send the information of the device
      state: {
        device
      }
   });
  }
}
