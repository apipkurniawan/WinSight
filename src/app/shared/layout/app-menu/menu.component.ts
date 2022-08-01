import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  model: any[] = [];

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
}
