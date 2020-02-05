import { async, TestBed } from '@angular/core/testing';
import { PerfilpessoafisicaComponent } from './perfilpessoafisica.component';
describe('PerfilpessoafisicaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PerfilpessoafisicaComponent]
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
//# sourceMappingURL=perfilpessoafisica.component.spec.js.map