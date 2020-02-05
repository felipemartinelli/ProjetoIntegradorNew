import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ListagemComponent = class ListagemComponent {
    constructor(srv) {
        this.srv = srv;
    }
    ngOnInit() {
        this.srv.recuperaTodos().subscribe((res) => {
            this.listaUser = res;
        });
    }
};
ListagemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-listagem',
        templateUrl: './listagem.component.html',
        styleUrls: ['./listagem.component.css']
    })
], ListagemComponent);
export { ListagemComponent };
//# sourceMappingURL=listagem.component.js.map