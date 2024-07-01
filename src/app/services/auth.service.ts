import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanMatch {

  constructor(public dataService: DataService, public router: Router) { }

  canMatch(route: Route, segments: UrlSegment[]): boolean {
    if(this.dataService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
