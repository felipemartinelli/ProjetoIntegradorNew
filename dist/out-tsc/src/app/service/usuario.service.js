import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UsuarioService = class UsuarioService {
    constructor(http) {
        this.http = http;
    }
    recuperaTodos() {
        return this.http.get("http://localhost:8080/usuario/todos");
    }
    recuperaPostsUsuario(id) {
        return this.http.get("http://localhost:8080/usuario/" + id);
    }
    insere(usuario) {
        return this.http.post("http://localhost:8080/usuario/novo", usuario);
    }
    atualiza(usuario) {
        return this.http.put("http://localhost:8080/usuario", usuario);
    }
    autenticar(usuario) {
        return this.http.post("http://localhost:8080/usuario/login", usuario);
    }
    buscarInfo(token) {
        return this.http.get("http://localhost:8080/usuario/infoDoUsuario?token=" + token);
    }
    insereInfoUsuario(infousuario) {
        return this.http.post("http://localhost:8080/infoUsuario/novo", infousuario);
    }
    recuperaInfoUsuario(id) {
        return this.http.get("http://localhost:8080/infoUsuario/" + id);
    }
    recuperaUsuario(id) {
        return this.http.get("http://localhost:8080/usuario/" + id);
    }
    alteraInfoUsuario(infousuario) {
        return this.http.put("http://localhost:8080/infoUsuario/alterar", infousuario);
    }
};
UsuarioService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UsuarioService);
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map