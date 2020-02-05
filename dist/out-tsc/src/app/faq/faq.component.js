import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Globals } from '../model/Globals';
//Para funcionar o JQuery é preciso instalar as bibiliotecas a seguir:
//npm install jquery --save
//npm install @types/jquery
//e import * as $ from 'jquery'; no projeto.
let FaqComponent = class FaqComponent {
    constructor(srv, router) {
        this.srv = srv;
        this.router = router;
        this.usuario = new Usuario();
        this._msgErroNome = null;
        this._msgErroTelefone = null;
        this._msgErroEmail = null;
        this._msgSenha = null;
        this._msgSenhaForte = null;
        this._msgSenhaFraca = null;
        this.cont = 0;
    }
    ngOnInit() {
    }
    valida() {
        if (this.email == null || this.nomeCompleto == null || this.telefone == null || this.senha == null || this.senhaRepetida == null) {
            alert("Preencha todos os campos corretamente!");
        }
        else {
            if (this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1) {
                this._msgErroEmail = "Digite um e-mail válido";
            }
            else {
                this.cont++;
                this._msgErroEmail = "";
            }
            if (this.telefone.toString().length >= 10 && this.telefone.toString().length <= 11) {
                this.cont++;
                this._msgErroTelefone = "";
            }
            else {
                this._msgErroTelefone = "Digite um telefone válido";
            }
            if (!this.isTipo(this.nomeCompleto)) {
                this._msgErroNome = "Nome e/ou Sobrenome Inválidos";
            }
            else {
                this.cont++;
                this._msgErroNome = "";
            }
            if (this.senha != this.senhaRepetida) {
                this._msgSenha = "As senhas digitadas não correspondem";
            }
            else {
                if (this.senha.length >= 10 && (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 || this.senha.indexOf("&") != -1) || this.senha.indexOf("%") != -1) {
                    this.cont++;
                }
                else {
                    this.cont++;
                }
            }
            if (this.cont >= 4) {
                this.cont = 0;
                this.enviarDados();
            }
            else {
                this.cont = 0;
            }
        }
    }
    forcaSenha() {
        if (this.senha.length >= 10 && (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 || this.senha.indexOf("&") != -1) || this.senha.indexOf("%") != -1) {
            this._msgSenhaForte = "Senha Forte";
            this._msgSenha = null;
            this._msgSenhaFraca = null;
        }
        else {
            this._msgSenhaFraca = "Senha Fraca";
            this._msgSenhaForte = null;
            this._msgSenha = null;
        }
    }
    isTipo(pVal) {
        var reTipo = /[A-z][ ][A-z]/;
        return reTipo.test(pVal);
    }
    enviarDados() {
        this.usuario.nome = this.nomeCompleto;
        this.usuario.email = this.email;
        this.usuario.telefone = this.telefone;
        this.usuario.senha = this.senha;
        console.log(this.usuario);
        this.srv.insere(this.usuario).subscribe(res => {
            alert("Cadastro efetuado com sucesso!");
        }, err => {
            console.log(err);
            alert("Erro ao inserir");
        });
    }
};
FaqComponent = tslib_1.__decorate([
    Component({
        selector: 'app-faq',
        templateUrl: './faq.component.html',
        styleUrls: ['./faq.component.css'],
        providers: [Globals]
    })
], FaqComponent);
export { FaqComponent };
//# sourceMappingURL=faq.component.js.map