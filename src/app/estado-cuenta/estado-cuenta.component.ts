import { Component, OnInit, Input } from '@angular/core';
import { GastosService } from '../services/gastos.service';
import { Gasto } from '../models/gasto.model';


@Component({
  selector:'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss']
})
export class EstadoCuentaComponent implements OnInit {
  gastos: any[] = [];

  constructor(private service: GastosService) {

  }

  ngOnInit(): void {
    //this.gastos = this.service.gastos//
    this.service.todas().subscribe((m: Gasto[]) => {
      this.gastos = m;
    });
  }
}
