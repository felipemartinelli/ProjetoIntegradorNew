import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Post } from '../model/Post';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/Usuario';
let FeedComponent = class FeedComponent {
    constructor(postService, router, srv) {
        this.postService = postService;
        this.router = router;
        this.srv = srv;
        this.now = new Date();
        this._msgErro = null;
        this._post = null;
        this.vetorOunao = true;
        this.post = new Post();
        this.i = 1;
        this.idModal = 0;
    }
    ngOnInit() {
        if (localStorage.getItem("MyToken")) {
            this.srv.buscarInfo(localStorage.getItem("MyToken")).subscribe((res) => {
                Globals.user = res;
                this.usuario = new Usuario();
                this.usuario.nome = res.nome;
                this.usuario.idUsuario = res.idUsuario;
                this.acharTodos();
            }, err => {
                console.log(err);
                alert("Erro ao inserir");
            });
        }
        else {
            alert("Você Precisa estar conectado para acessar essa página!");
            this.router.navigate(['/home']);
            console.log(localStorage.getItem);
        }
    }
    acharTodos() {
        this._posts = null;
        console.log(this.usuario.idUsuario);
        this.srv.recuperaPostsUsuario(this.usuario.idUsuario).subscribe((postOut) => this.usuarios = postOut);
        //this.postService.getAllPosts().subscribe((postOut: Post[]) => this.posts = postOut);
        console.log(this.usuarios);
        this.vetorOunao = true;
    }
    enviarDados() {
        if (this.textPost != null || this.textPost != "") {
            this.post.texto = this.textPost;
            this.post.dataInclusao = this.now.toLocaleDateString();
            console.log(this.post.dataInclusao);
            this.post.imagem = null;
            this.post.usuario = this.usuario;
            this.postService.inserePost(this.post).subscribe(res => {
                this.acharTodos();
            }, err => {
                console.log(err);
                alert("Erro ao inserir");
            });
        }
        else {
            alert("Não é possivel incluir um texto em branco");
        }
    }
    editar(id) {
        this.post.idPostagem = id;
        this.idModal = id;
        this.postService.recuperaPostPeloID(id).subscribe((res) => {
            this.post.idPostagem = id;
            this.textPostModel = res.texto;
        }, (err) => {
            alert("deu ruim!");
        });
        console.log(this.idModal);
    }
    enviarAlteracoes(id) {
        //this.post.idPostagem = id;;
        this.post.texto = this.textPostModel;
        this.post.dataInclusao = "23/01/2020";
        console.log(this.post);
        this.postService.alteraPost(this.post).subscribe((res) => {
            alert("Atualizado com sucesso");
            this.acharTodos();
            $('#btnfecharLogin').click();
        }, (err) => {
            alert("Erro ao atualizar");
            console.log(err);
            this.acharTodos();
            $('#btnfecharLogin').click();
        });
    }
    pesquisar() {
        if (this.idBusca <= 0) {
            this._msgErro = "Digite um numero valido";
        }
        else {
            this._msgErro = null;
            this.postService.recuperaPostPeloID(this.idBusca).subscribe((res) => {
                this._post = res;
                this.vetorOunao = false;
                console.log(this.vetorOunao);
                console.log(this._post);
            });
        }
    }
    pesquisarPalavra() {
        this.postService.recuperaPostPelaPalavra(this.palavraPesquisada).subscribe((res) => {
            this._posts = res;
            console.log(this._posts);
        });
    }
    logout() {
        if (localStorage.getItem("MyToken")) {
            localStorage.removeItem("MyToken");
            window.location.reload();
        }
        else {
            this.router.navigate(['/home']);
        }
    }
};
FeedComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feed',
        templateUrl: './feed.component.html',
        styleUrls: ['./feed.component.css'],
        providers: [Globals]
    })
], FeedComponent);
export { FeedComponent };
//# sourceMappingURL=feed.component.js.map