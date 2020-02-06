import { Component, OnInit } from '@angular/core';
import { InfoUsuario } from '../model/InfoUsuario';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { Globals } from '../model/Globals';

@Component({
  selector: 'app-pessoajuridica',
  templateUrl: './pessoajuridica.component.html',
  styleUrls: ['./pessoajuridica.component.css']
})
export class PessoajuridicaComponent implements OnInit {

  public infousuario: InfoUsuario;
  usuario: Usuario;
  private cnpj: string;
  private nomefantasia: string;
  private razaoSocial: string;
  private telefone: string;
  private senha: string;
  private endereco: string;
  private setor: string;
  private infoEmpresa: string;
  private infoVagas: string;

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
  this.usuario.cnpj = this.cnpj;
  this.usuario.nomeFantasia = this.nomefantasia;
  this.usuario.razaoSocial = this.razaoSocial;
  this.usuario.telefone = this.telefone;
  this.usuario.senha = this.senha;
  this.infousuario.endereco = this.endereco;
  this.infousuario.setor = this.setor;
  this.infousuario.infoEmpresa = this.infoEmpresa;
  this.infousuario.infoVagas = this.infoVagas;

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
    },
    err=>{
      
    }
  )

}


private inserir(){

  this.infousuario = new InfoUsuario();

  this.infousuario.idInfo = this.usuario.idUsuario;
  this.infousuario.endereco = this.endereco;
  this.infousuario.setor = this.setor;
  this.infousuario.infoEmpresa = this.infoEmpresa;
  this.infousuario.infoVagas = this.infoVagas;
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
