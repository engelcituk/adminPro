import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Lugar } from './../../../models/lugar.model';
import { Hotel } from './../../../models/hotel.model';
import { LugarService, HotelService } from '../../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styles: []
})
export class LugarComponent implements OnInit {
  formEstado: FormGroup;
  lugar: Lugar = new Lugar('');
  desde: number = 0;
  hoteles: Hotel[] = [];
  constructor(
    public lugarService: LugarService,
    public hotelService: HotelService,
    public router: Router,
    public rutaActivada: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: any = this.rutaActivada.snapshot.paramMap.get('id'); // obtengo el id en la url

    // obtengo la lista de hoteles a cargar
    this.hotelService.getHoteles(this.desde).subscribe((respuesta: any) => {
      console.log(respuesta.hoteles);
      this.hoteles = respuesta.hoteles;
    });
    // si la url no es para crear, obtengo el lugar a editar
    if (id !== 'nuevo') {
      this.lugarService.getLugar(id).subscribe((respuesta: Lugar) => {
        this.lugar = respuesta;
        // this.campoPassword = false;
        console.log(this.lugar);
      });
    }

  }

  // para guardar un nuevo lugar
  saveLugar(formCliente: NgForm) {
    // console.log(formCliente.valid);
    // console.log(formCliente.value);
    if (formCliente.invalid) {
      return;
    }
    this.lugarService.saveLugar(this.lugar).subscribe(lugar => {
      this.lugar._id = lugar._id;
      // recargo la pagina
      this.router
        .navigateByUrl('/LugarComponent', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['lugar', this.lugar._id]);
        });
    });
  }
}
