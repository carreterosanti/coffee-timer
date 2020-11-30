import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrentRouteService {
  constructor(private router: Router) {}

  isRouteSettings() {
    return this.router.events.pipe(
      filter((data) => data instanceof NavigationEnd),
      map((data: any) => data.url == '/settings')
    );
  }
}
