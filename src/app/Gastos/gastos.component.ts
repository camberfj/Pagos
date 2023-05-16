import { GastosService } from './../services/gastos.service';
import { Component } from '@angular/core';
import { Gasto } from '../models/gasto.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss'],
})
export class GastosComponent {
  constructor(private service: GastosService, private router: Router) {}

  culpable: string = '';
  valor: string = '';


  registrar() {
    const datos: Gasto = {
      culpable: this.culpable,
      valor: this.valor,
      fecha: new Date(),

    };

    this.service.agregar(datos).subscribe(
      (respuesta) => {
        this.router.navigateByUrl("estado")
      },
      (err) => console.log(err)
    );
    this.limpiarCampos();

  }

  limpiarCampos(){
    this.culpable = '';
    this.valor = '';
  }
}
