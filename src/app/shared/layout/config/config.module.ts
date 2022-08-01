import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { PrimeNgModule } from '@app/shared/prime-ng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PrimeNgModule, FormsModule],
  declarations: [ConfigComponent],
  exports: [ConfigComponent],
})
export class ConfigModule {}
