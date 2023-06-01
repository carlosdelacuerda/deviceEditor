import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailComponent } from './device-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipGrid } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

/*
describe('DeviceDetailComponent', () => {
  let component: DeviceDetailComponent;
  let fixture: ComponentFixture<DeviceDetailComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['getCurrentNavigation', 'extras.state']);

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [
        DeviceDetailComponent,
        MatChipGrid
      ],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatPaginatorModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: routerSpy
        },
        {
          provide: Router,
          useValue: routerSpy
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
*/
