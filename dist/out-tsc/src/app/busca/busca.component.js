import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let BuscaComponent = class BuscaComponent {
    constructor(postService) {
        this.postService = postService;
        this._msgErro = null;
        this._post = null;
        this.vetorOunao = true;
    }
    ngOnInit() {
    }
    pesquisar() {
        if (this.idBusca <= 0) {
            this._msgErro = "Digite um numero valido";
        }
        else {
            this._msgErro = null;
            this.postService.recuperaPostPeloID(this.idBusca).subscribe((res) => {
                this._post = res;
                this.vetorOunao = true;
                console.log(this._post);
            });
        }
    }
};
BuscaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-busca',
        templateUrl: './busca.component.html',
        styleUrls: ['./busca.component.css']
    })
], BuscaComponent);
export { BuscaComponent };
//# sourceMappingURL=busca.component.js.map