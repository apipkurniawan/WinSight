import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';
import { AdministrationUserComponent } from './administration-user.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrationUserComponent,
  },
];

@NgModule({
  declarations: [AdministrationUserComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class AdministrationUserModule {}
