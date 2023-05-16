import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoCuentaComponent } from './estado-cuenta.component';


describe('EstadoCuentaComponet', () =>  {
  let component: EstadoCuentaComponent;
  let fixture: ComponentFixture<EstadoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})
