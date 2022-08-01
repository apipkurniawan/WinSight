import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CardModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    InputSwitchModule,
    InputTextModule,
    PanelModule,
    TableModule,
  ],
  exports: [
    CardModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    InputSwitchModule,
    InputTextModule,
    PanelModule,
    TableModule,
  ],
  declarations: [],
})
export class PrimeNgModule {}
