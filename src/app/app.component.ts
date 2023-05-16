import { Component } from '@angular/core';
import { GastosService } from './services/gastos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private service: GastosService){}
  registrar($event: any) {
    this.service.agregar($event)
  }

}
