import { Injectable } from '@angular/core';
import { PlaceHolderApi } from 'src/app/core/api/placeholder.api';
import { map, catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlaceholderFacade {

  constructor(private postApi: PlaceHolderApi) { }

  /*
  Ahora conoceremos 2 operadores más de rxjs, of y catchError. Of retornará un valor concreto, como por ejemplo
  el error de una petición que es capturada por el operador destinado a este cometido catchError, este solo actuará
  ante caso de error.
  */

  getPosts$ = () => {
    this.postApi.getPosts$().pipe(
      map((res: Array<string>) => {
        console.log(res)
      }),
      catchError((err) => of(console.error(err))),
    ).subscribe()
  }

}


/*
Tenemos más operadores rxjs como puede ser:
 -> filter: que nos permite filtrar el resultado para retornar solo lo que nos interesa
 -> concatMap: Crea un nuevo observable con los valores recibidos.
 -> mergeMap: Genera un observable por cada uno de los elementos.
 -> delay: Añade un retraso al inicio del flujo de datos
 -> take: Número máximo de iteraciones
 -> tap: Intercepta cada emisión en el comienzo del interacción devolviendo un observable identico al raíz

...

Source : https://rxjs-dev.firebaseapp.com/api/operators`
 */
