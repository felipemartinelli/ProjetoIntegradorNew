import { async, TestBed } from '@angular/core/testing';
import { PessoafisicaComponent } from './pessoafisica.component';
describe('PessoafisicaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PessoafisicaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PessoafisicaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pessoafisica.component.spec.js.map