import { Post } from './Post';

  
export class Usuario{
    
    public idUsuario: number;
    public cnpj: string;
    public nome: string;
    public telefone: string;
    public email: string;
    public senha: string;
    public nomeFantasia: string;
    public razaoSocial: string;
    public tipo: string;
    public post: Post;
}