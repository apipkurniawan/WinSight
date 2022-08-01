import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '@app/shared/prime-ng.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [PrimeNgModule, FormsModule, LayoutModule, CommonModule],
  exports: [PrimeNgModule, FormsModule],
  declarations: [],
})
export class SharedModule {}
