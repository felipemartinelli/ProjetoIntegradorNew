import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilpessoajuridicaComponent } from './perfilpessoajuridica.component';

describe('PerfilpessoajuridicaComponent', () => {
  let component: PerfilpessoajuridicaComponent;
  let fixture: ComponentFixture<PerfilpessoajuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilpessoajuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilpessoajuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
