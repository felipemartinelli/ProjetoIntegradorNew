package br.org.generation.ClickIn.services;

import java.util.List;

import br.org.generation.ClickIn.model.Usuario;

public interface IUsuarioService {
	
	public void gravarUsuario(Usuario usuario);
	public void atualizarUsuario(Usuario usuario);
	public List<Usuario> recuperarTodos();
	public Usuario recuperarPorId(int id);
	public void excluirUsuario(int id);
	
}
