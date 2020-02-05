import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Usuario } from '../model/Usuario';
let DetalheComponent = class DetalheComponent {
    constructor(rota, srv) {
        this.rota = rota;
        this.srv = srv;
        this.usuario = new Usuario();
        this.display = 'none';
    }
    ngOnInit() {
        this.id = this.rota.snapshot.params["id"];
        //  this.srv.recuperaDetalhe(this.id).subscribe((res:Usuario)=>{
        //  this.usuario = res;
        // });
    }
    enviarAlteracoes() {
        this.srv.atualiza(this.usuario).subscribe((res) => {
            alert("Atualizado com sucesso");
        }, (err) => {
            alert("Erro ao atualizar");
            console.log(err);
        });
    }
};
DetalheComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detalhe',
        templateUrl: './detalhe.component.html',
        styleUrls: ['./detalhe.component.css']
    })
], DetalheComponent);
export { DetalheComponent };
//# sourceMappingURL=detalhe.component.js.map