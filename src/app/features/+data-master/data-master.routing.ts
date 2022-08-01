import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'administration-user',
    loadChildren: () =>
      import('./forms/administration-user/administration-user.module').then(
        (m) => m.AdministrationUserModule
      ),
    data: { pageTitle: 'Administrasi-User' },
  },
];

export const Routing = RouterModule.forChild(routes);
