import { Component } from '@angular/core';

export type AppRoutes = 'people' | 'films';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  selectedRoute: AppRoutes;

  onNavItemSelected(selected: AppRoutes) {
    this.selectedRoute = selected;
  }
}
