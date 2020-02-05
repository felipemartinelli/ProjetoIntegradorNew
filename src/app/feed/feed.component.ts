import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [Globals]
})
export class FeedComponent implements OnInit {

  now = new Date();
  usuario: Usuario;
  posts: Post[];
  _posts: Post[];
  usuarios: Usuario[];
  private idBusca: number;
  private idPostagem;
  private _msgErro: string = null;
  private _post: Post = null;
  private vetorOunao: boolean = true;
  private textPost: string;
  private textPostModel: string;
  private palavraPesquisada: string;
  public post: Post = new Post();
  private i: number = 1;
  public idModal: number = 0;


  constructor(private postService: PostService, private router: Router, private srv: UsuarioService) { }



  ngOnInit() {

    if(localStorage.getItem("MyToken")){
        

        this.srv.buscarInfo(localStorage.getItem("MyToken")).subscribe(
          (res: Usuario) => {
            
                Globals.user = res;
                this.usuario = new Usuario();
                this.usuario.nome = res.nome;
                this.usuario.idUsuario = res.idUsuario;
                this.acharTodos();
          },   
        err => {
          console.log(err);
          alert("Erro ao inserir");
        });
      
    }else{
      alert("Você Precisa estar conectado para acessar essa página!")
      this.router.navigate(['/home']);
      console.log(localStorage.getItem);
    }
  }

  acharTodos() {
    this._posts = null;
    this.srv.recuperaPostsUsuario(this.usuario.idUsuario).subscribe((postOut: Usuario) => this.usuario = postOut);
  }

  enviarDados() {
    if (this.textPost != null || this.textPost != "") {

      this.post.texto = this.textPost;
      this.post.dataInclusao = this.now.toLocaleDateString();
      console.log(this.post.dataInclusao);
      this.post.imagem = null;
      this.post.usuario = this.usuario;

      this.postService.inserePost(this.post).subscribe(
        res => {
          this.acharTodos();
          
        },
        err => {
          console.log(err);
          alert("Erro ao inserir");
        }
      )
    }
    else {
      alert("Não é possivel incluir um texto em branco");
    }

  }


  private editar(id: number) {
    this.post.idPostagem = id;
    this.idModal = id;
    this.postService.recuperaPostPeloID(id).subscribe(
      (res: Post) => { 
        this.post.idPostagem = id; 
        this.textPostModel = res.texto; 
      },

      (err) => { alert("deu ruim!");
    });
    console.log(this.idModal);
  }

  enviarAlteracoes(id: number) {
    //this.post.idPostagem = id;;
    this.post.texto = this.textPostModel;
    this.post.dataInclusao = "23/01/2020";

    

    console.log(this.post);
    this.postService.alteraPost(this.post).subscribe((res) => {
      alert("Atualizado com sucesso");
      this.acharTodos();
      $('#btnfecharLogin').click();
    },
      (err) => {
        alert("Erro ao atualizar");
        console.log(err);
        this.acharTodos();
        $('#btnfecharLogin').click();
      });

  }



  private pesquisar() {
    if (this.idBusca <= 0) {
      this._msgErro = "Digite um numero valido";
    }
    else {
      this._msgErro = null;
      this.postService.recuperaPostPeloID(this.idBusca).subscribe((res: Post) => {
        this._post = res;
        this.vetorOunao = false;
        console.log(this.vetorOunao);
        console.log(this._post);
      });
    }
  }

  private pesquisarPalavra() {

    this.srv.recuperaPostsUsuario(this.usuario.idUsuario).subscribe((postOut: Usuario) => this.usuario = postOut);
      this.postService.recuperaPostPelaPalavra(this.palavraPesquisada).subscribe((res: Post[]) => {
        this._posts = res;
        console.log(this._posts);
      
    });
  }

  private logout(){
  if(localStorage.getItem("MyToken")){
    localStorage.removeItem("MyToken");
    window.location.reload();
  }else{
  this.router.navigate(['/home']);
  }
}

}