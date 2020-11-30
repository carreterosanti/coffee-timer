import { Component } from '@angular/core';
import { CurrentRouteService } from 'src/services/current-route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isSettings$: any;

  constructor(currentRouteService: CurrentRouteService) {
    this.isSettings$ = currentRouteService.isRouteSettings();
  }
}
