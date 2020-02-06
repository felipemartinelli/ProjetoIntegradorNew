import { Component, OnInit } from '@angular/core';
import { InfoUsuario } from '../model/InfoUsuario';
import { UsuarioService } from '../service/usuario.service';
import { Globals } from '../model/Globals';
import { Usuario } from '../model/Usuario';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-pessoafisica',
  templateUrl: './pessoafisica.component.html',
  styleUrls: ['./pessoafisica.component.css'],
  providers: [Globals]
})
export class PessoafisicaComponent implements OnInit {

  public infousuario: InfoUsuario;

  usuario: Usuario;
  private nomeCompleto: string;
  private cpf: string;
  private endereco: string;
  private telefone: string;
  private setor: string;
  private cargo: string;
  private formacaoAcademica: string;
  private formacaoProfissional: string;
  private senha: string;
  private senhaRepetida: string;

  constructor(private srv: UsuarioService, private router: Router) { }

  ngOnInit() {

    if(localStorage.getItem("MyToken")){

      this.srv.buscarInfo(localStorage.getItem("MyToken")).subscribe(
        (res: Usuario) => {
          
              Globals.user = res;
              this.usuario = new Usuario();
              this.usuario.nome = res.nome;
              this.usuario.idUsuario = res.idUsuario;
              this.recuperaInformacoesInfo();
              this.recuperaInformacoesUser();
        },   
      err => {
        alert("Erro ao inserir");
      });
    
  }else{
    alert("Você Precisa estar conectado para acessar essa página!")
    this.router.navigate(['/home']);
  }

  }


  private enviar(){

    this.srv.recuperaInfoUsuario(this.usuario.idUsuario).subscribe(
      (res:InfoUsuario)=>{
        this.infousuario = res;
        this.alterarInfo();
      },
      err=>{
        this.inserir();
      }
    )

  }


  private alterarInfo(){

    this.infousuario.idInfo = this.usuario.idUsuario;
    this.infousuario.cpf = this.cpf;
    this.infousuario.cargo = this.cargo;
    this.infousuario.endereco = this.endereco;
    this.infousuario.infoAcademica = this.formacaoAcademica;
    this.infousuario.infoProfissional = this.formacaoProfissional;
    this.infousuario.setor = this.setor;
    this.infousuario.usuario = this.usuario;

    console.log("entrou no alterarinfo");
    this.srv.alteraInfoUsuario(this.infousuario).subscribe(
      (res:InfoUsuario)=>{
        this.infousuario = res;
        alert("Alterado com sucesso!");
      },
      err=>{
        alert("Erro ao alterar!");
      }
    )

  }

  private recuperaInformacoesInfo(){

    this.srv.recuperaInfoUsuario(this.usuario.idUsuario).subscribe(
      (res:InfoUsuario)=>{
        this.infousuario = res;
      },
      err=>{
        
      }
    )

  }

  private recuperaInformacoesUser(){

    this.srv.recuperaUsuario(this.usuario.idUsuario).subscribe(
      (res:Usuario)=>{
        this.usuario = res;
        this.usuario.telefone = res.telefone;
        console.log(this.usuario);
      },
      err=>{
        
      }
    )

  }


  private inserir(){

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

    this.srv.insereInfoUsuario(this.infousuario).subscribe(
      res =>{
        alert("Cadastro efetuado com sucesso!");
      },
      err=>{
        alert("Erro ao inserir");
      }
    )
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