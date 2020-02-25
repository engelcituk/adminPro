import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Cliente } from './../../../models/cliente.model';
import { ClienteService } from '../../../services/service.index';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  formCliente: FormGroup;
  cliente: Cliente = new Cliente('', '', '', true, '');

  constructor(
    public clienteService: ClienteService,
    public router: Router,
    public rutaActivada: ActivatedRoute
  ) { }

  ngOnInit() {

    const id: any = this.rutaActivada.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.clienteService.getCliente(id)
        .subscribe((respuesta: Cliente) => {
          this.cliente = respuesta;
          // this.campoPassword = false;
          console.log(this.cliente);
        });
    }

  }

  // para guardar a un nuevo cliente
  saveCliente(formCliente: NgForm) {
    // console.log(formCliente.valid);
    // console.log(formCliente.value);
    if (formCliente.invalid) {
      return;
    }
    this.clienteService.saveCliente(this.cliente).subscribe(cliente => {
      this.cliente._id = cliente._id;
      // recargo la pagina
      this.router.navigateByUrl('/ClienteComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['clientes', this.cliente._id]);
      });
    });
  }


}
