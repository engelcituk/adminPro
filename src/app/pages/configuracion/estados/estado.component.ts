import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Estado } from './../../../models/estado.model';
import { EstadoService } from '../../../services/service.index';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styles: []
})
export class EstadoComponent implements OnInit {
  formEstado: FormGroup;
  estado: Estado = new Estado('');

  constructor(
    public estadoService: EstadoService,
    public router: Router,
    public rutaActivada: ActivatedRoute
    ) { }

  ngOnInit() {

    const id: any = this.rutaActivada.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.estadoService.getEstado(id)
        .subscribe((respuesta: Estado) => {
          this.estado = respuesta;
        });
    }

  }


  saveEstado(formEstado: NgForm) {
    // console.log(formHotel.valid);
    // console.log(formHotel.value);
    if (formEstado.invalid) {
      return;
    }
    this.estadoService.saveEstado(this.estado).subscribe(hotel => {
      this.estado._id = hotel._id;
      this.router.navigate(['/estados', this.estado._id]);
    });
  }

  getEstado(id: string) {
    this.estadoService.getEstado(id)
      .subscribe(estado => {
        this.estado = estado;
        console.log(this.estado);

      }
      );
  }
}
