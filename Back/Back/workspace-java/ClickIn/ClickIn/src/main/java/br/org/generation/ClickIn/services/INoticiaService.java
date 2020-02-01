package br.org.generation.ClickIn.services;

import java.util.List;

import br.org.generation.ClickIn.model.Noticia;

public interface INoticiaService {
	
	public void gravarNoticia(Noticia noticia);
	public void atualizarNoticia(Noticia noticia);
	public List<Noticia> recuperarTodos();
	public Noticia recuperarPorId(int id);
	public void excluirNoticia(int id);

}
