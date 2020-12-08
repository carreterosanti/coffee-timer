import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentRouteService } from 'src/services/current-route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public currentRoute$: Observable<any>;

  constructor(currentRouteService: CurrentRouteService) {
    this.currentRoute$ = currentRouteService.getCurrentRoute();
  }
}
