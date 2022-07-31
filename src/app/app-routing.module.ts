import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: '',
    canActivate: [],
    data: { pageTitle: 'Home' },
    children: [
      {
        path: '',
        loadChildren:
          '@app/features/dashboard/dashboard.module#DashboardModule',
        data: { pageTitle: 'Dashboard' },
      },
      {
        path: '',
        // loadChildren: '',
        canActivate: [],
        data: { pageTitle: 'Data-Master' },
      },
      {
        path: '',
        // loadChildren: '',
        canActivate: [],
        data: { pageTitle: 'Regular-Transaction' },
      },
      {
        path: '',
        // loadChildren: '',
        canActivate: [],
        data: { pageTitle: 'Back-Office-Transaction' },
      },
      {
        path: '',
        // loadChildren: '',
        canActivate: [],
        data: { pageTitle: 'Special-Transaction' },
      },
    ],
  },
  {
    path: 'auth',
    // component: '',
    // loadChildren: '',
  },
  {
    path: 'unauthorized',
    // component: '',
  },
  {
    path: 'landingpage',
    // component: '',
  },
  {
    path: '**',
    // component: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
