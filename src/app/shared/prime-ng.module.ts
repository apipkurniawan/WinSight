import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CardModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    InputSwitchModule,
    InputTextModule,
  ],
  exports: [
    CardModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    InputSwitchModule,
    InputTextModule,
  ],
  declarations: [],
})
export class PrimeNgModule {}
