package br.org.generation.ClickIn.dao;

import org.springframework.data.repository.CrudRepository;

import br.org.generation.ClickIn.model.Post;

public interface IPostRepo extends CrudRepository<Post, Integer>{

}
