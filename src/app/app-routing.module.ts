import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { AdminPayrollComponent } from './examples/child-routes/admin/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from './examples/child-routes/admin/admin-vacation/admin-vacation.component';
import { AdminComponent } from './examples/child-routes/admin/admin.component';
import { RouteParamComponent } from './examples/route-param/route-param.component';
import { ExamplesComponent } from './examples/examples.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './common/guards/auth.service';
import { DynamicComponent } from './examples/dynamic/dynamic.component';
import { CustomInputComponent } from './examples/custom-input/custom-input.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  {
    path: 'examples',
    component: ExamplesComponent,
    children: [
      {
        path: 'child',
        component: AdminComponent,
        children: [
          {
            path: 'payroll',
            component: AdminPayrollComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'vacation',
            component: AdminVacationComponent,
            canActivate: [AuthGuard],
          },
        ],
        canActivate: [AuthGuard],
      },
      {
        path: 'route-params',
        component: RouteParamComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'route-params/:id',
        component: RouteParamComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'lazy',
        loadChildren: () =>
          import('./examples/lazy-module/lazy-module.module').then(
            (m) => m.LazyModuleModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'dynamic',
        component: DynamicComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'input',
        component: CustomInputComponent,
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
