/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GastosService } from './gastos.service';

describe('Service: Gastos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GastosService]
    });
  });

  it('should ...', inject([GastosService], (service: GastosService) => {
    expect(service).toBeTruthy();
  }));
});
