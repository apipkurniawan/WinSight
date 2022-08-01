import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulLink } from '@app/core/enums/module.enum';

const routes: Routes = [
  {
    path: '',
    // component: '',
    canActivate: [],
    data: { pageTitle: 'Home' },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        data: { pageTitle: 'Dashboard' },
      },
      {
        path: ModulLink.DataMaster,
        loadChildren: () =>
          import('@app/features/+data-master/data-master.module').then(
            (m) => m.DataMasterModule
          ),
        canActivate: [],
        data: { pageTitle: 'Data-Master' },
      },
      {
        path: ModulLink.RegularTransaction,
        loadChildren: () =>
          import(
            '@app/features/+regular-transaction/regular-transaction.module'
          ).then((m) => m.RegularTransactionModule),
        canActivate: [],
        data: { pageTitle: 'Regular-Transaction' },
      },
      {
        path: ModulLink.BackOfficeTransaction,
        loadChildren: () =>
          import(
            '@app/features/+back-office-transaction/back-office-transaction.module'
          ).then((m) => m.BackOfficeTransactionModule),
        canActivate: [],
        data: { pageTitle: 'Back-Office-Transaction' },
      },
      {
        path: ModulLink.SpecialTransaction,
        loadChildren: () =>
          import(
            '@app/features/+special-transaction/special-transaction.module'
          ).then((m) => m.SpesialTransactionModule),
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
