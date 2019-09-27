import { Injectable } from '@angular/core';
import { Horario } from '../../models/horario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS} from './../../config/config';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de horario listo');
  }

  crearHorario(horario: Horario) {

    const url = URL_SERVICIOS + '/Horarios/add';

    return this.http.post(url, horario);

  }
  getHorarios(desde: number = 0) {

    const url = 'Horarios/getAll';

    return this.http.get(url);

  }

}
