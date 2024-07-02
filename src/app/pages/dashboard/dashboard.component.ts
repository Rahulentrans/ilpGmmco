import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {

  employeeInfo: any;
  isSearch = false;
  filteredHistory:any;

  constructor(public router:Router, public dataService: DataService) {

  }

  ngOnInit(): void {
    this.employeeInfo = this.dataService.getEmployeeData();
    this.filteredHistory = this.employeeInfo.completedCourseList;
    //console.log(this.employeeInfo);
  }

  onLogoutClick=(eve:Event) => {
    this.dataService.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  onSearchClick(elem: HTMLInputElement) {
    elem.focus();
  }

  onKeyChange(eve:Event) {
    //console.log((eve.target as HTMLInputElement).value);
    const searchString = ((eve.target as HTMLInputElement).value).toLowerCase();;
    this.filteredHistory = this.employeeInfo.completedCourseList.filter((item:any) => (item.coursename).toLowerCase().includes(searchString));

  }
  ngOnDestroy(): void {
    this.dataService.onDestroy();
  }

}
