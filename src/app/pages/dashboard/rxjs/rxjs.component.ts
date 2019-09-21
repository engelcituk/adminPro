import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() {

   this.suscripcion = this.regresarobservable()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.log('Error en el observador', error),
      () => console.log('El observador terminó'));
  }

  ngOnInit() {
  }

  ngOnDestroy() {

    console.log('La pagina se va cerrar');
    this.suscripcion.unsubscribe();
  }
  regresarobservable(): Observable<any> {

   return  new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      const intervalo = setInterval(() => {

        contador += 1;

        const salida = {
          valor : contador
        };

        observer.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('Error');
        // }

      }, 1000);

    }).pipe(
      map( respuesta =>  respuesta.valor),
      filter( (valor, indice) => {
        // console.log('filter', valor, indice);
        if ( (valor % 2) === 1) {
          // par
          return true;
        } else {
          // impar
          return false;
        }
      })
    );
  }
}
