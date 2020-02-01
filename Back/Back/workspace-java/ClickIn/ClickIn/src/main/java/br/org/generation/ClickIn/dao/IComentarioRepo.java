package br.org.generation.ClickIn.dao;

import org.springframework.data.repository.CrudRepository;

import br.org.generation.ClickIn.model.Comentario;

public interface IComentarioRepo extends CrudRepository<Comentario, Integer> {

}
