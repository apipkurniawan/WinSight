import { NgModule } from '@angular/core';

import { PrimeNgModule } from './prime-ng.module';

@NgModule({
  imports: [PrimeNgModule],
  exports: [PrimeNgModule],
  declarations: [],
})
export class SharedModule {}
