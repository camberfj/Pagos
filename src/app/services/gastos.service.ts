import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gasto } from '../models/gasto.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GastosService {
  listagastos: any[];
  url: string = 'http://localhost:3000/gastos';

constructor(private HttpClient: HttpClient) {
  this.listagastos = [];
}

todas(): Observable<Gasto[]>{
 return  this.HttpClient.get<Gasto[]>(this.url)
}

get gastos() {
  return this.listagastos;
}

agregar(gasto: Gasto): Observable<Gasto> {
  //this.gastos.push($event);//
  return this.HttpClient.post<Gasto>(this.url, gasto);
}

}
