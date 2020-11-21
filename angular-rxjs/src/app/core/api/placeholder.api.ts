import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class PlaceHolderApi {

  private url: string = `https://jsonplaceholder.typicode.com/photos/`

  constructor(private http: HttpClient) { }

  getPosts$(): Observable<Array<string>> {
    /*
    El operador Pipe de RXJS nos ayuda a recibir una petición observable (asíncrona) y para aplicarle patrones
    funcionales, es decir , a aplicar más operadores sobre el flujo de datos.
    */

    // El operador map, va a permitirnos transformar la respuesta en el "tipo" que necesitamos, (ver ejemplo JS)

    return this.http.get(this.url).pipe(map(res => {
      return res as Array<string>
    }))
  }

}
