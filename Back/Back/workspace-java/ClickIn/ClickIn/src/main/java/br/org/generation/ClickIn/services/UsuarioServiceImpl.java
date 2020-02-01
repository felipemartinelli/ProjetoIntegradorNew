package br.org.generation.ClickIn.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.org.generation.ClickIn.dao.IUsuarioRepo;
import br.org.generation.ClickIn.model.Usuario;

@Component
public class UsuarioServiceImpl implements IUsuarioService {
	
	@Autowired
	private IUsuarioRepo repo;

	@Override
	public void gravarUsuario(Usuario usuario) {
		try {
			repo.save(usuario);
		}
		catch(Exception ex) {
			throw new RuntimeException("Erro ao inserir novo usuario");
		}
		
	}

	@Override
	public void atualizarUsuario(Usuario usuario) {
		try {
			repo.save(usuario);			
		}catch(Exception ex) {
			throw new RuntimeException("Erro ao atualizar novo usuario");
		}
		
	}
	

	@Override
	public List<Usuario> recuperarTodos() {
		return (List<Usuario>)repo.findAll();
	}

	@Override
	public Usuario recuperarPorId(int id) {
		return repo.findById(id).get();
	}

	@Override
	public void excluirUsuario(int id) {
		try {
			repo.deleteById(id);			
		}catch(Exception ex) {
			throw new RuntimeException("Erro ao atualizar excluir usuario");
		}
		
	}
	

}
