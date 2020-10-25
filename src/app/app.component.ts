import { Component } from '@angular/core';
import { routeTransitions } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routeTransitions ]
})
export class AppComponent {
  title = 'portfolio';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
