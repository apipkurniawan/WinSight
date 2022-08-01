import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-user',
  templateUrl: './administration-user.component.html',
  styleUrls: [],
})
export class AdministrationUserComponent implements OnInit {
  userId: string;
  loadingSearch = [false, false, false, false];
  loadingAdd = [false, false, false, false];
  products = [];
  loadingTable: boolean;
  cols: any[];

  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'status', header: 'Status' },
      { field: '', header: '' },
    ];
  }

  load(index) {
    this.loadCustomers();
    this.loadingSearch[index] = true;
    setTimeout(() => (this.loadingSearch[index] = false), 1000);
  }

  loadAdd(index) {
    this.loadingAdd[index] = true;
    setTimeout(() => (this.loadingAdd[index] = false), 1000);
  }

  loadCustomers() {
    this.loadingTable = true;

    setTimeout(() => {
      this.products = [
        { id: '1', name: 'Marco Botton', status: 'Active' },
        { id: '2', name: 'Valeria Liberty', status: 'Active' },
      ];
      this.loadingTable = false;
    }, 1000);
  }
}
