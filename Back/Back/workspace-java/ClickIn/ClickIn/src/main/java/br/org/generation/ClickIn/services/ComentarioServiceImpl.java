package br.org.generation.ClickIn.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.org.generation.ClickIn.dao.IComentarioRepo;
import br.org.generation.ClickIn.model.Comentario;


	@Component
	public class ComentarioServiceImpl implements IComentarioService {

	@Autowired
	private IComentarioRepo repo;

	@Override
	public void gravarComentario(Comentario comentario) {
		try {
			repo.save(comentario);
		} catch (Exception ex) {
			throw new RuntimeException("Erro ao inserir seu comentario");
		}

	}

	@Override
	public void atualizarComentario(Comentario comentario) {
		try {
			repo.save(comentario);
		} catch (Exception ex) {
			throw new RuntimeException("Erro ao atualizar seu comentario");
		}

	}

	@Override
	public List<Comentario> recuperarTodos() {
		return (List<Comentario>) repo.findAll();
	}

	@Override
	public Comentario recuperarPorId(int id) {
		return repo.findById(id).get();
	}
	@Override
	public void excluirComentario(int id) {
		repo.deleteById(id);
		
	}

}
