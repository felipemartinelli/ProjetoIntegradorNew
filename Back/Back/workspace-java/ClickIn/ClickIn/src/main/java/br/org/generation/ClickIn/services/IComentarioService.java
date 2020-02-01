package br.org.generation.ClickIn.services;

import java.util.List;

import br.org.generation.ClickIn.model.Comentario;

public interface IComentarioService {
	
	public void gravarComentario(Comentario comentario);
	public void atualizarComentario(Comentario comentario);
	public List<Comentario> recuperarTodos();
	public Comentario recuperarPorId(int id);
	public void excluirComentario(int id);

}
