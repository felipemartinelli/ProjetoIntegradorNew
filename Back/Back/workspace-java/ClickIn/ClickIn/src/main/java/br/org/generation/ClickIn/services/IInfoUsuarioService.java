package br.org.generation.ClickIn.services;

import java.util.List;

import br.org.generation.ClickIn.model.InfoUsuario;

public interface IInfoUsuarioService {
	
	public void gravarInfo(InfoUsuario infousuario);
	public void atualizarInfo(InfoUsuario infousuario);
	public List<InfoUsuario> recuperarTodos();
	public InfoUsuario recuperarPorId(int id);
	public void excluirInfoUsuario(int id);
}
