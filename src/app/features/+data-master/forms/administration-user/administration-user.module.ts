import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationUserComponent } from './administration-user.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationUserComponent,
  },
];

@NgModule({
  declarations: [AdministrationUserComponent],
  imports: [RouterModule.forChild(routes)],
})
export class AdministrationUserModule {}
