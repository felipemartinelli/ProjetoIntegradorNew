package br.org.generation.ClickIn.dao;

import org.springframework.data.repository.CrudRepository;

import br.org.generation.ClickIn.model.Usuario;

public interface IUsuarioRepo extends CrudRepository<Usuario, Integer> {

}
