import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaixadoresComponent } from './embaixadores.component';

describe('EmbaixadoresComponent', () => {
  let component: EmbaixadoresComponent;
  let fixture: ComponentFixture<EmbaixadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbaixadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbaixadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
