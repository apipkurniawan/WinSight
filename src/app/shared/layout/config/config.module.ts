import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { PrimeNgModule } from '@app/shared/prime-ng.module';
import { FormsModule } from '@angular/forms';

import {
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
};

@NgModule({
  imports: [CommonModule, PrimeNgModule, FormsModule, PerfectScrollbarModule],
  declarations: [ConfigComponent],
  exports: [ConfigComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class ConfigModule {}
