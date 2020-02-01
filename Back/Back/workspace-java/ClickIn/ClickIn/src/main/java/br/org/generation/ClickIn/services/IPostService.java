package br.org.generation.ClickIn.services;

import java.util.List;

import br.org.generation.ClickIn.model.Post;

public interface IPostService {
		
	public void gravarPost(Post post);
	public void atualizarPost(Post post);
	public List<Post> recuperarTodos();
	public Post recuperarPorId(int id);
	public void excluirPost(int id);

}
