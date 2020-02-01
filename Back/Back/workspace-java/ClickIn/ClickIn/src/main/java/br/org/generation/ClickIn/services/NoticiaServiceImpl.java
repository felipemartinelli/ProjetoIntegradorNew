package br.org.generation.ClickIn.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.org.generation.ClickIn.dao.INoticiaRepo;
import br.org.generation.ClickIn.model.Noticia;

@Component
public class NoticiaServiceImpl implements INoticiaService{
	
	@Autowired
	private INoticiaRepo repo;

	@Override
	public void gravarNoticia(Noticia noticia) {
		try {
			repo.save(noticia);
		}
		catch(Exception ex) {
			throw new RuntimeException("Erro ao inserir nova postagem");
		}
		
	}

	@Override
	public void atualizarNoticia(Noticia noticia) {
		try {
			repo.save(noticia);			
		}catch(Exception ex) {
			throw new RuntimeException("Erro ao atualizar nova postagem");
		}
		
	}

	@Override
	public List<Noticia> recuperarTodos() {
		return (List<Noticia>)repo.findAll();
	}

	@Override
	public Noticia recuperarPorId(int id) {
		return repo.findById(id).get();
	}

	@Override
	public void excluirNoticia(int id) {
		repo.deleteById(id);
		
	}
	
}
