import { Component, Input, ViewChild } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { MenuService } from '../services/menu.service';

import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective,
} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
})
export class ConfigComponent {
  @Input() minimal: boolean = false;

  scales: number[] = [12, 13, 14, 15, 16];

  constructor(
    public layoutService: LayoutService,
    public menuService: MenuService
  ) {}

  get visible(): boolean {
    return this.layoutService.state.configSidebarVisible;
  }

  set visible(_val: boolean) {
    this.layoutService.state.configSidebarVisible = _val;
  }

  get scale(): number {
    return this.layoutService.config.scale;
  }

  set scale(_val: number) {
    this.layoutService.config.scale = _val;
  }

  get menuMode(): string {
    return this.layoutService.config.menuMode;
  }

  set menuMode(_val: string) {
    this.layoutService.config.menuMode = _val;
    if (this.layoutService.isSlim()) {
      this.menuService.reset();
    }
  }

  get inputStyle(): string {
    return this.layoutService.config.inputStyle;
  }

  set inputStyle(_val: string) {
    this.layoutService.config.inputStyle = _val;
  }

  get ripple(): boolean {
    return this.layoutService.config.ripple;
  }

  set ripple(_val: boolean) {
    this.layoutService.config.ripple = _val;
  }

  type: string = 'component';
  config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective)
  directiveRef?: PerfectScrollbarDirective;

  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }

  changeTheme(theme: string, colorScheme: string) {
    const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
    const newHref = themeLink
      .getAttribute('href')!
      .replace(this.layoutService.config.theme, theme);
    this.layoutService.config.colorScheme;
    this.replaceThemeLink(newHref, () => {
      this.layoutService.config.theme = theme;
      this.layoutService.config.colorScheme = colorScheme;
      this.layoutService.onConfigUpdate();
    });
  }

  replaceThemeLink(href: string, onComplete: Function) {
    const id = 'theme-css';
    const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
    const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

    cloneLinkElement.setAttribute('href', href);
    cloneLinkElement.setAttribute('id', id + '-clone');

    themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

    cloneLinkElement.addEventListener('load', () => {
      themeLink.remove();
      cloneLinkElement.setAttribute('id', id);
      onComplete();
    });
  }

  decrementScale() {
    this.scale--;
    this.applyScale();
  }

  incrementScale() {
    this.scale++;
    this.applyScale();
  }

  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }

  onActivate(event: any) {
    window.scroll(0, 0);
    // let scrollToTop = window.setInterval(() => {
    //     let pos = window.pageYOffset;
    //     if (pos > 0) {
    //         window.scrollTo(0, pos - 100); // how far to scroll on each step
    //     } else {
    //         window.clearInterval(scrollToTop);
    //     }
    // }, 16);
  }

  scrollToXY(x: number, y: number): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollTo(x, y, 500);
    } else if (
      this.type === 'component' &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.scrollTo(x, y, 500);
    }
  }

  scrollToTop(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToTop();
    } else if (
      this.type === 'component' &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.scrollToTop();
    }
  }

  scrollToLeft(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToLeft();
    } else if (
      this.type === 'component' &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.scrollToLeft();
    }
  }

  scrollToRight(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToRight();
    } else if (
      this.type === 'component' &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.scrollToRight();
    }
  }

  scrollToBottom(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToBottom();
    } else if (
      this.type === 'component' &&
      this.componentRef &&
      this.componentRef.directiveRef
    ) {
      this.componentRef.directiveRef.scrollToBottom();
    }
  }

  onScrollEvent(event: any): void {
    // console.log(event);
  }
}
