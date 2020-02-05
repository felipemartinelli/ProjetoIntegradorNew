import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InfoUsuario } from '../model/InfoUsuario';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/Usuario';
let PessoafisicaComponent = class PessoafisicaComponent {
    constructor(srv, router) {
        this.srv = srv;
        this.router = router;
    }
    ngOnInit() {
        if (localStorage.getItem("MyToken")) {
            this.srv.buscarInfo(localStorage.getItem("MyToken")).subscribe((res) => {
                Globals.user = res;
                this.usuario = new Usuario();
                this.usuario.nome = res.nome;
                this.usuario.idUsuario = res.idUsuario;
                this.recuperaInformacoesInfo();
                this.recuperaInformacoesUser();
            }, err => {
                alert("Erro ao inserir");
            });
        }
        else {
            alert("Você Precisa estar conectado para acessar essa página!");
            this.router.navigate(['/home']);
        }
    }
    enviar() {
        this.srv.recuperaInfoUsuario(this.usuario.idUsuario).subscribe((res) => {
            this.infousuario = res;
            this.alterarInfo();
        }, err => {
            this.inserir();
        });
    }
    alterarInfo() {
        this.infousuario.idInfo = this.usuario.idUsuario;
        this.infousuario.cpf = this.cpf;
        this.infousuario.cargo = this.cargo;
        this.infousuario.endereco = this.endereco;
        this.infousuario.infoAcademica = this.formacaoAcademica;
        this.infousuario.infoProfissional = this.formacaoProfissional;
        this.infousuario.setor = this.setor;
        this.infousuario.usuario = this.usuario;
        console.log("entrou no alterarinfo");
        this.srv.alteraInfoUsuario(this.infousuario).subscribe((res) => {
            this.infousuario = res;
            alert("Alterado com sucesso!");
        }, err => {
            alert("Erro ao alterar!");
        });
    }
    recuperaInformacoesInfo() {
        this.srv.recuperaInfoUsuario(this.usuario.idUsuario).subscribe((res) => {
            this.infousuario = res;
        }, err => {
        });
    }
    recuperaInformacoesUser() {
        this.srv.recuperaUsuario(this.usuario.idUsuario).subscribe((res) => {
            this.usuario = res;
            this.usuario.telefone = res.telefone;
        }, err => {
        });
    }
    inserir() {
        this.infousuario = new InfoUsuario();
        this.infousuario.idInfo = this.usuario.idUsuario;
        this.infousuario.cpf = this.cpf;
        this.infousuario.cargo = this.cargo;
        this.infousuario.endereco = this.endereco;
        this.infousuario.infoAcademica = this.formacaoAcademica;
        this.infousuario.infoProfissional = this.formacaoProfissional;
        this.infousuario.setor = this.setor;
        this.infousuario.usuario = this.usuario;
        console.log(this.infousuario);
        this.srv.insereInfoUsuario(this.infousuario).subscribe(res => {
            alert("Cadastro efetuado com sucesso!");
        }, err => {
            alert("Erro ao inserir");
        });
    }
};
PessoafisicaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-pessoafisica',
        templateUrl: './pessoafisica.component.html',
        styleUrls: ['./pessoafisica.component.css'],
        providers: [Globals]
    })
], PessoafisicaComponent);
export { PessoafisicaComponent };
//# sourceMappingURL=pessoafisica.component.js.map