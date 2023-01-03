import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AuthService } from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular 13 Fundamentals';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
  ];

  examples = [
    { path: '/examples/child', icon: 'face', title: 'Child Routes' },
    {
      path: '/examples/route-params',
      icon: 'system_update_alt',
      title: 'Route Params',
    },
    {
      path: '/examples/lazy',
      icon: 'swap_vertical_circle',
      title: 'Lazy Module',
    },
    {
      path: '/examples/dynamic',
      icon: 'add_box',
      title: 'Dynamic Components',
    },
    {
      path: '/examples/input',
      icon: 'dashboard_customize',
      title: 'Custom Input',
    },
  ];

  constructor(private authService: AuthService) {}

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  logout() {
    this.authService.logout();
  }
}
