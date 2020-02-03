import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilpessoafisicaComponent } from './perfilpessoafisica.component';

describe('PerfilpessoafisicaComponent', () => {
  let component: PerfilpessoafisicaComponent;
  let fixture: ComponentFixture<PerfilpessoafisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilpessoafisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilpessoafisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
