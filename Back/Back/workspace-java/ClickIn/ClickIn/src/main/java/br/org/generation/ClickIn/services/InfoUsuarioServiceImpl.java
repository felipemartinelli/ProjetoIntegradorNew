package br.org.generation.ClickIn.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.org.generation.ClickIn.dao.IInfoUsuarioRepo;
import br.org.generation.ClickIn.model.InfoUsuario;

@Component
public class InfoUsuarioServiceImpl implements IInfoUsuarioService {
	
		@Autowired
		private IInfoUsuarioRepo repo;

		@Override
		public void gravarInfo(InfoUsuario infoUsuario) {
		try {
			repo.save(infoUsuario);
		}
		catch(Exception ex) {
			throw new RuntimeException("Erro ao inserir usuário");
		}
		
	}

		@Override
		public void atualizarInfo(InfoUsuario infoUsuario) {
		try {
			repo.save(infoUsuario);			
		}catch(Exception ex) {
			throw new RuntimeException("Erro ao atualizar usuario");
		}
		
	}

		@Override
		public List<InfoUsuario> recuperarTodos() {
		return (List<InfoUsuario>)repo.findAll();
	}

		@Override
		public InfoUsuario recuperarPorId(int id) {
		return repo.findById(id).get();
	}
		@Override
		public void excluirInfoUsuario(int id) {
			repo.deleteById(id);
			
		}

}

