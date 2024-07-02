import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curriculum-app';
  
  constructor(public dataService: DataService, public router: Router) {

  }

  ngOnInit(): void {
    this.dataService.getJSON().subscribe((response: any) => {
      this.router.navigate(['login']);     
    })
  }
}
