import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { HorarioService, HotelService} from '../../../services/service.index';
import { Horario } from './../../../models/horario.model';
import { Hotel } from './../../../models/hotel.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styles: []
})
export class HorarioComponent implements OnInit {

  formHorario: FormGroup;
  hoteles: Hotel[] = [];
  horario: Horario = new Horario('', '');
  idHotel: any;

  constructor(
    public horarioService: HorarioService,
    public hotelService: HotelService,
    public router: Router,
    public rutaActivada: ActivatedRoute
    ) {

      const id: any = this.rutaActivada.snapshot.paramMap.get('id');
      if (id !== 'nuevo') {
        this.getHorario(id);

    }

  }

  ngOnInit() {

    this.hotelService.getHoteles().subscribe((respuesta: any) => {
      this.hoteles = respuesta.hoteles;
      console.log(this.hoteles);

    });
  }

  saveHorario(formHorario: NgForm) {
    // console.log(formHorario.valid);
    // console.log(formHorario.value);
    if (formHorario.invalid) {
      return;
    }
    this.horarioService.saveHorario(this.horario).subscribe(horario => {
      this.horario._id = horario._id;
      this.router.navigate(['/horarios', this.horario._id]);
    });
  }

  getHorario(id: string) {

    this.horarioService.getHorario(id)
      .subscribe((horario: Horario) => {
        this.horario = horario;
        this.horario.hotel = horario.hotel;
        console.log(this.horario.hotel);
      });

  }

}
