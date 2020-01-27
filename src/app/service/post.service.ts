import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

 /* retornaTodas(){
    return this.http.get("http://cloud.professorisidro.com.br:8088/postagens");
  }
  recuperaPostPeloID(id:number){
    return this.http.get("http://cloud.professorisidro.com.br:8088/postagens/"+id);
  }*/

  public getAllPosts(){
    return this.http.get("http://localhost:8080/post/todos");
  }

  recuperaPostPeloID(id:number){
    return this.http.get("http://localhost:8080/post/"+id);
  }

  public inserePost(posts:Post){
    return this.http.post("http://localhost:8080/post/novo",posts);
  }

  public alteraPost(posts:Post){
    return this.http.put("http://localhost:8080/post/alterar",posts);
  }


}