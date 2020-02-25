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
        },
        {
          titulo: 'Promesas', url: '/promesas'
        },
        {
          titulo: 'Rxjs', url: '/rxjs'
        }
      ]
    },
    {
      titulo: 'Administración',
      icono: 'mdi mdi-view-list',
      submenu: [
        {
          titulo: 'Agencias', url: '/agencias'
        },
        {
          titulo: 'Paquetes', url: '/paquetes'
        },
        {
          titulo: 'Lugares', url: '/lugares'
        },
        {
          titulo: 'Clientes', url: '/clientes'
        },
        {
          titulo: 'Usuarios', url: '/usuarios'
        }
      ]
    },
    {
      titulo: 'Configuración',
      icono: 'mdi mdi-settings',
      submenu: [
        {
          titulo: 'Hoteles', url: '/hoteles'
        },
        {
          titulo: 'Horarios', url: '/horarios'
        },
        {
          titulo: 'Estados', url: '/estados'
        },
        {
          titulo: 'Permisos', url: '/permisos'
        }
      ]
    }
  ];

  constructor() { }
}
