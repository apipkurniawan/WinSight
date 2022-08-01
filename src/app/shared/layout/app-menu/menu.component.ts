import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective,
} from 'ngx-perfect-scrollbar';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  model: any[] = [];
  type: string = 'component';
  config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective)
  directiveRef?: PerfectScrollbarDirective;

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        ],
      },
      {
        label: 'FORM',
        items: [
          {
            label: 'Data Master',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Administration - User',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Administration - Role',
                icon: 'pi pi-fw pi-bookmark',
              },
            ],
          },
          {
            label: 'Regular Transaction',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'MF - Subscription',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'MF - Redemption',
                icon: 'pi pi-fw pi-bookmark',
              },
            ],
          },
          {
            label: 'Back Office Transaction',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Settlement',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Correction',
                icon: 'pi pi-fw pi-bookmark',
              },
            ],
          },
          {
            label: 'Special Transaction',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Mass Redemption',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Maturity',
                icon: 'pi pi-fw pi-bookmark',
              },
            ],
          },
          {
            label: 'Reporting',
            icon: 'pi pi-fw pi-bookmark',
            items: [
              {
                label: 'Mutual Fund Transaction Reports',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Investor Reports',
                icon: 'pi pi-fw pi-bookmark',
              },
            ],
          },
        ],
      },
    ];
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
