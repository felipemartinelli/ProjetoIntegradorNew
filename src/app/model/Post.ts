import { Usuario } from './Usuario';

export class Post{

    public idPostagem: number;
    public texto: string;
    public dataInclusao: string;
    public imagem: string;
    public usuario: Usuario;
}