import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoajuridicaComponent } from './pessoajuridica.component';

describe('PessoajuridicaComponent', () => {
  let component: PessoajuridicaComponent;
  let fixture: ComponentFixture<PessoajuridicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoajuridicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoajuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
