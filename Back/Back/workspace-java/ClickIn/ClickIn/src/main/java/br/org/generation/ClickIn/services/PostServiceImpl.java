package br.org.generation.ClickIn.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.org.generation.ClickIn.dao.IPostRepo;
import br.org.generation.ClickIn.model.Post;

@Component
public class PostServiceImpl implements IPostService {
	
	@Autowired
	private IPostRepo repo;

	@Override
	public void gravarPost(Post post) {
		try {
			repo.save(post);
		}
		catch(Exception ex) {
			throw new RuntimeException("Erro ao inserir nova postagem");
		}
		
	}

	@Override
	public void atualizarPost(Post post) {
		try {
			repo.save(post);			
		}catch(Exception ex) {
			throw new RuntimeException("Erro ao atualizar nova postagem");
		}
		
	}

	@Override
	public List<Post> recuperarTodos() {
		return (List<Post>)repo.findAll();
	}

	@Override
	public Post recuperarPorId(int id) {
		return repo.findById(id).get();
	}

	@Override
	public void excluirPost(int id) {
		repo.deleteById(id);
		
	}

}
