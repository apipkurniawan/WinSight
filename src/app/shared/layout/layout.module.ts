import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from '../prime-ng.module';
import { FooterComponent } from './app-footer/footer.component';
import { MainLayoutComponent } from './app-layout/main-layout.component';
import { MenuitemComponent } from './app-menu/menu-item.component';
import { MenuComponent } from './app-menu/menu.component';
import { SidebarComponent } from './app-sidebar/sidebar.component';
import { TopbarComponent } from './app-topbar/topbar.component';
import { ConfigModule } from './config/config.module';

@NgModule({
  declarations: [
    FooterComponent,
    TopbarComponent,
    SidebarComponent,
    MenuComponent,
    MenuitemComponent,
    MainLayoutComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ConfigModule,
  ],
  exports: [MainLayoutComponent],
})
export class LayoutModule {}
