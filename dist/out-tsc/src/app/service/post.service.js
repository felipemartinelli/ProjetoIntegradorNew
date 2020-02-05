import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let PostService = class PostService {
    constructor(http) {
        this.http = http;
    }
    /* retornaTodas(){
       return this.http.get("http://cloud.professorisidro.com.br:8088/postagens");
     }
     recuperaPostPeloID(id:number){
       return this.http.get("http://cloud.professorisidro.com.br:8088/postagens/"+id);
     }*/
    getAllPosts() {
        return this.http.get("http://localhost:8080/post/todos");
    }
    recuperaPostPeloID(id) {
        return this.http.get("http://localhost:8080/post/" + id);
    }
    recuperaPostPelaPalavra(palavra) {
        return this.http.get("http://localhost:8080/post/busca/?key=" + palavra);
    }
    inserePost(posts) {
        return this.http.post("http://localhost:8080/post/novo", posts);
    }
    alteraPost(posts) {
        return this.http.put("http://localhost:8080/post/alterar", posts);
    }
};
PostService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PostService);
export { PostService };
//# sourceMappingURL=post.service.js.map