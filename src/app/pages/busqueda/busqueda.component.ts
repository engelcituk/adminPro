import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../models/hotel.model';
import { Horario } from '../../models/horario.model';
import { Estado } from '../../models/estado.model';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  hoteles : Hotel[] = [];
  horarios : Horario[] = [];
  estados : Estado[] = [];


  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient
  ) {
    activatedRoute.params.subscribe( params => {
      const termino = params.termino;
      this.buscar(termino);
    });
  }

  ngOnInit() {
  }

  buscar(termino: string) {

    const url = 'busqueda/todo/' + termino;
    this.http.get(url).subscribe( (respuesta: any) => {
      //console.log(respuesta);
      this.hoteles = respuesta.hoteles;
      this.horarios = respuesta.horarios;
      this.estados = respuesta.estados;

    });

  }
}
