import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { EstadoCuentaComponent } from './estado-cuenta/estado-cuenta.component';
import { GastosComponent } from './Gastos/gastos.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'estado',
    pathMatch: 'full',
  },
  {
    path: 'estado',
    component: EstadoCuentaComponent,
  },
  {
    path: 'gastos',
    component: GastosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
