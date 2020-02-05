import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { Globals } from '../model/Globals';
import * as $ from 'jquery';
//Para funcionar o JQuery é preciso instalar as bibiliotecas a seguir:
//npm install jquery --save
//npm install @types/jquery
//e import * as $ from 'jquery'; no projeto.
let HomeComponent = class HomeComponent {
    constructor(srv, router, _scrollToService) {
        this.srv = srv;
        this.router = router;
        this._scrollToService = _scrollToService;
        this.usuario = new Usuario();
        this._msgErroNome = null;
        this._msgErroTelefone = null;
        this._msgErroEmail = null;
        this._msgSenha = null;
        this._msgSenhaForte = null;
        this._msgSenhaFraca = null;
        this._msgErroRazao = null;
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
    validaEmpresa() {
        console.log("entrou no validaEmpresa");
        if (this.email == null || this.razaoSocial == null || this.telefone == null || this.senha == null || this.senhaRepetida == null || this.nomeFantasia == null || this.cnpj == null) {
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
            if (!this.isTipo(this.razaoSocial)) {
                this._msgErroRazao = "Razão Social Inválidos";
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
                this.enviarDadosEmpresa();
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
        this.usuario.tipo = "PF";
        console.log(this.usuario);
        this.srv.insere(this.usuario).subscribe(res => {
            alert("Cadastro efetuado com sucesso!");
            $('#btnFecharUsuario').click();
        }, err => {
            console.log(err);
            alert("Erro ao inserir");
        });
    }
    enviarDadosEmpresa() {
        this.usuario.cnpj = this.cnpj;
        this.usuario.email = this.email;
        this.usuario.telefone = this.telefone;
        this.usuario.senha = this.senha;
        this.usuario.tipo = "PJ";
        this.usuario.nomeFantasia = this.nomeFantasia;
        this.usuario.razaoSocial = this.razaoSocial;
        console.log(this.usuario);
        this.srv.insere(this.usuario).subscribe(res => {
            alert("Cadastro efetuado com sucesso!");
            $('#btnFecharEmpresa').click();
        }, err => {
            console.log(err);
            alert("Erro ao inserir");
        });
    }
    validaLogin() {
        this.usuario.email = this.emailLogin;
        this.usuario.senha = this.senhaLogin;
        this.srv.autenticar(this.usuario).subscribe((res) => {
            // se deu certo        
            // armazeno o token no LocalStorage
            localStorage.setItem("MyToken", res.strToken);
            console.log(res.strToken);
            alert("E-mail e senha validados com sucesso!");
            this.router.navigate(['/feed']);
            $('#btnfecharLogin').click();
            // window.location.reload();
        }, (err) => {
            alert("Usuário não cadastrado no sistema");
        });
    }
    /*
      this.usuario.email = this.emailLogin;
      this.usuario.senha = this.senhaLogin;
      this.router.navigate(['feed']);
      $('#btnfecharLogin').click();

      this.srv.recuperaLoginESenha(this.usuario).subscribe(
        (res:Usuario) =>{
          alert("E-mail e senha validados com sucesso!");
          Globals.user = res;
          this.router.navigate(['feed']);
          $('#btnfecharLogin').click();

        },
        err=>{
          alert("Usuário não cadastrado no sistema");
        }
      )}*/
    triggerScrollToQS() {
        const config = {
            target: 'sobrenos'
        };
        this._scrollToService.scrollTo(config);
    }
    triggerScrollToEm() {
        const config = {
            target: 'embaixadores'
        };
        this._scrollToService.scrollTo(config);
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        providers: [Globals]
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map