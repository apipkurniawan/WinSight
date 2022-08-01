import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  imports: [
    CardModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    InputSwitchModule,
  ],
  exports: [
    CardModule,
    ButtonModule,
    SidebarModule,
    RadioButtonModule,
    InputSwitchModule,
  ],
  declarations: [],
})
export class PrimeNgModule {}
