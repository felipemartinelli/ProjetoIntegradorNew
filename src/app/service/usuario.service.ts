import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { InfoUsuario } from '../model/InfoUsuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public recuperaTodos(){
    return this.http.get("http://localhost:8080/usuario/todos");

  }
  public recuperaPostsUsuario(id: number){
    return this.http.get("http://localhost:8080/usuario/"+id);

  }
  public insere(usuario:Usuario){
    return this.http.post("http://localhost:8080/usuario/novo",usuario);
  }

  public atualiza(usuario: Usuario){
    return this.http.put("http://localhost:8080/usuario", usuario);
  }

  public autenticar(usuario: Usuario) {
    return this.http.post("http://localhost:8080/usuario/login", usuario);
  }

  public buscarInfo(token: string){
    return this.http.get("http://localhost:8080/usuario/infoDoUsuario?token="+token);
  }

  public  insereInfoUsuario(infousuario:InfoUsuario){
    return this.http.post("http://localhost:8080/infoUsuario/novo",infousuario);
  }

  public recuperaInfoUsuario(id: number){
    return this.http.get("http://localhost:8080/infoUsuario/"+id);

  }

  public recuperaUsuario(id: number){
    return this.http.get("http://localhost:8080/usuario/"+id);

  }

  public alteraInfoUsuario(infousuario: InfoUsuario){
    return this.http.put("http://localhost:8080/infoUsuario/alterar", infousuario);
  }

  
  

  

}