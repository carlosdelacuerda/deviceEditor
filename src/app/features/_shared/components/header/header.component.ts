import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sectionTitle: string = 'HOME'

  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((x:any) => {
          let title = x.url.slice(1)
          return title;
        }),
        )
      .subscribe((title:string) => {
        if (title) {
          this.sectionTitle = title;
        } else {
          this.sectionTitle = 'DEVICE EDITOR';
        }
      });
  }
}
