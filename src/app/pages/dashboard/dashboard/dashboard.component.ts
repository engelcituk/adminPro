import { Component, OnInit } from '@angular/core';
// import { ENDPOINTS } from './../../../config/config';




import 'datatables.net';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  dtOptions: DataTables.Settings = {};


  constructor() {

  }

  ngOnInit() {
    this.dtOptions = {
      ajax: 'http://localhost:3000/evento/data',
      columns: [
        {
          title: 'ID',
          data: '_id'
        },
        {
          title: 'First name',
          data: 'title'
        },
        {
          title: 'Last name',
          data: 'start'
        },
        {
          title: 'Color',
          data: 'color'
        }
      ]
    };
  }
}
