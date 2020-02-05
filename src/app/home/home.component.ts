import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';
import * as $ from 'jquery';
import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { MyToken } from '../model/MyToken';

//Para funcionar o JQuery é preciso instalar as bibiliotecas a seguir:
//npm install jquery --save
//npm install @types/jquery
//e import * as $ from 'jquery'; no projeto.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ Globals ]
})
export class HomeComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  private nomeCompleto:string;
  private email:string;
  private telefone:string;
  private senha: string;
  private senhaRepetida: string;
  private senhaLogin: string;
  private emailLogin: string;
  private razaoSocial: string;
  private nomeFantasia: string;
  private cnpj: string;
  private _msgErroNome: string = null;
  private _msgErroTelefone: string = null;
  private _msgErroEmail: string = null;
  private _msgSenha: string = null;
  private _msgSenhaForte: string = null;
  private _msgSenhaFraca: string = null;
  private _msgErroRazao: string = null;
  private cont = 0;
  


  constructor(private srv: UsuarioService, private router: Router, private _scrollToService: ScrollToService) { }

  ngOnInit() {

  }
  
  private valida(){
    

    if(this.email == null || this.nomeCompleto == null || this.telefone == null || this.senha == null || this.senhaRepetida == null){
      alert("Preencha todos os campos corretamente!");
      
    }
    else{

      if(this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1){
        this._msgErroEmail = "Digite um e-mail válido";
      }
      else{
          this.cont++;
          this._msgErroEmail = "";
      }

      if(this.telefone.toString().length >= 10 && this.telefone.toString().length <=11){
          this.cont++;
          this._msgErroTelefone = "";       
      }
      else{
        this._msgErroTelefone = "Digite um telefone válido";
      }

      if (!this.isTipo(this.nomeCompleto))
      {
        this._msgErroNome = "Nome e/ou Sobrenome Inválidos";
      }
      else{
        this.cont++;
        this._msgErroNome = "";
      }

      if(this.senha != this.senhaRepetida){
        this._msgSenha = "As senhas digitadas não correspondem";
      }
        else{
          if(this.senha.length >= 10 && (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 || this.senha.indexOf("&") != -1) || this.senha.indexOf("%") != -1)
          {
            this.cont++;
          }
          else{
            this.cont++;
          }
        
        }

          if(this.cont >= 4)
          {
              this.cont = 0;
              this.enviarDados();
              
          }
          else{
            this.cont = 0;
          }

        }     



    }

  
  public validaEmpresa(){

    console.log("entrou no validaEmpresa");

    if(this.email == null || this.razaoSocial == null || this.telefone == null || this.senha == null || this.senhaRepetida == null || this.nomeFantasia == null || this.cnpj == null){

      alert("Preencha todos os campos corretamente!");
    
    }
    else{

      if(this.email.indexOf("@") == -1 || this.email.indexOf(".") == -1){
        this._msgErroEmail = "Digite um e-mail válido";
      }
      else{
          this.cont++;
          this._msgErroEmail = "";
      }

      if(this.telefone.toString().length >= 10 && this.telefone.toString().length <=11){
          this.cont++;
          this._msgErroTelefone = "";       
      }
      else{
        this._msgErroTelefone = "Digite um telefone válido";
      }

      if (!this.isTipo(this.razaoSocial))
      {
        this._msgErroRazao = "Razão Social Inválidos";
      }
      else{
        this.cont++;
        this._msgErroNome = "";
      }

      if(this.senha != this.senhaRepetida){
        this._msgSenha = "As senhas digitadas não correspondem";
      }
        else{
          if(this.senha.length >= 10 && (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 || this.senha.indexOf("&") != -1) || this.senha.indexOf("%") != -1)
          {
            this.cont++;
          }
          else{
            this.cont++;
          }
        
        }

          if(this.cont >= 4)
          {
              this.cont = 0;
              this.enviarDadosEmpresa();
              
          }
          else{
            this.cont = 0;
          }

        }
  } 


    private forcaSenha(){
      
          if(this.senha.length >= 10 && (this.senha.indexOf("@") != -1 || this.senha.indexOf("#") != -1 || this.senha.indexOf("$") != -1 || this.senha.indexOf("&") != -1) || this.senha.indexOf("%") != -1)
          {
            this._msgSenhaForte = "Senha Forte";
            this._msgSenha = null;
            this._msgSenhaFraca = null;
          }
          else{
            this._msgSenhaFraca = "Senha Fraca";
            this._msgSenhaForte = null;
            this._msgSenha = null;
            }
        
        
    }

    public isTipo(pVal) { 
      var reTipo = /[A-z][ ][A-z]/; 
      return reTipo.test(pVal); 
    }


    enviarDados(){

      this.usuario.nome = this.nomeCompleto;
      this.usuario.email = this.email;
      this.usuario.telefone = this.telefone;
      this.usuario.senha = this.senha;
      this.usuario.tipo = "PF";

      console.log(this.usuario);
      this.srv.insere(this.usuario).subscribe(
        res =>{
          alert("Cadastro efetuado com sucesso!");
          $('#btnFecharUsuario').click();
        },
        err=>{
          console.log(err);
          alert("Erro ao inserir");
        }
      )

    }


    enviarDadosEmpresa(){

      this.usuario.cnpj = this.cnpj;
      this.usuario.email = this.email;
      this.usuario.telefone = this.telefone;
      this.usuario.senha = this.senha;
      this.usuario.tipo = "PJ";
      this.usuario.nomeFantasia = this.nomeFantasia;
      this.usuario.razaoSocial = this.razaoSocial;

      console.log(this.usuario);
      this.srv.insere(this.usuario).subscribe(
        res =>{
          alert("Cadastro efetuado com sucesso!");
          $('#btnFecharEmpresa').click();
        },
        err=>{
          console.log(err);
          alert("Erro ao inserir");
        }
      )

    }




    validaLogin(){

      this.usuario.email = this.emailLogin;
      this.usuario.senha = this.senhaLogin;

      this.srv.autenticar(this.usuario).subscribe(
        (res: MyToken)=>{
          // se deu certo        
          // armazeno o token no LocalStorage
          localStorage.setItem("MyToken", res.strToken);
          console.log(res.strToken);
          alert("E-mail e senha validados com sucesso!");
          this.router.navigate(['/feed']);
          
          $('#btnfecharLogin').click();
         // window.location.reload();
        },
        (err)=>{
          alert("Usuário não cadastrado no sistema");
        }
      );
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



    


  public triggerScrollToQS() {
    
    const config: ScrollToConfigOptions = {
      target: 'sobrenos'
    };
 
    this._scrollToService.scrollTo(config);
  }

  public triggerScrollToEm() {
    
    const config: ScrollToConfigOptions = {
      target: 'embaixadores'
    };
 
    this._scrollToService.scrollTo(config);
  }

  }