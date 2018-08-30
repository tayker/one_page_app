import { Component } from '@angular/core';
import {
  Event as RouterEvent,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoaded = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
            this.isLoaded = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          setTimeout(() => {
            this.isLoaded = false;
          }, 2000);
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
