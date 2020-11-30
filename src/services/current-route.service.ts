import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrentRouteService {
  constructor(private router: Router) {}

  getCurrentRoute() {
    return this.router.events.pipe(
      filter((data) => data instanceof NavigationEnd),
      map((data: any) => data.url)
    );
  }
}
