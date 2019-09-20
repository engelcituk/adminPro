import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Tablero', url : '/dashboard'
        },
        {
          titulo: 'Reportes', url: '/reportes'
        },
        {
          titulo: 'Agenda', url: '/agenda'
        },
        {
          titulo: 'Progress', url: '/progress'
        },
        {
          titulo: 'Graficas', url: '/graficas'
        }
      ]
    }
  ];

  constructor() { }
}
