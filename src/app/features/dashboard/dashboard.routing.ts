import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const routes: Routes = [{ path: '', component: DashboardComponent }];

export const Routing = RouterModule.forChild(routes);
