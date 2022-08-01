import { RouterModule, Routes } from '@angular/router';
import { SubMenuLink } from '@app/core/enums/sub-menu.enum';

export const routes: Routes = [
  {
    path: SubMenuLink.AdministrasiUser,
    loadChildren: () =>
      import('./forms/administration-user/administration-user.module').then(
        (m) => m.AdministrationUserModule
      ),
    data: { pageTitle: 'Administrasi-User' },
  },
];

export const Routing = RouterModule.forChild(routes);
