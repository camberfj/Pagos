import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  localeEs from '@angular/common/locales/es-AR';
import { AppComponent } from './app.component';
import { GastosComponent } from './Gastos/gastos.component';
import { FormsModule } from '@angular/forms';
import { EstadoCuentaComponent } from './estado-cuenta/estado-cuenta.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing';



registerLocaleData (localeEs, 'es')

@NgModule({
  declarations: [AppComponent,GastosComponent,EstadoCuentaComponent],

  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
    providers: [
      {
        provide: LOCALE_ID,
        useValue: 'es',
      },
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
