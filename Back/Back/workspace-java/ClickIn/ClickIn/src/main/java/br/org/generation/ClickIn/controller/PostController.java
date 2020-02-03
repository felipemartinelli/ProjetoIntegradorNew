package br.org.generation.ClickIn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.ClickIn.model.Post;
import br.org.generation.ClickIn.services.IPostService;

@RestController
@CrossOrigin("*")
public class PostController {
	
	@Autowired
	private IPostService servico;
	
	@GetMapping("/post/todos")
	public ResponseEntity<List<Post>> mostrarTodos() {
		return ResponseEntity.ok(servico.recuperarTodos());
	}
	
	@PostMapping("/post/novo")
	public ResponseEntity<Post> inserirNovoComentario(@RequestBody Post post) {
		try {
			servico.gravarPost(post);
			return ResponseEntity.ok(post);
			
		}catch(Exception ex) {
			return ResponseEntity.badRequest().build();
		}
	}
	@GetMapping("/post/{id}")
	public ResponseEntity<Post> buscarPostPeloId(@PathVariable int id){
		Post p =servico.recuperarPorId(id);
		if(p != null) {
			return ResponseEntity.ok(p);
		}
		return ResponseEntity.notFound().build();
		
	}

	@PutMapping("/post/alterar")
	public ResponseEntity<Post> atualizarDados(@RequestBody Post post){
		servico.atualizarPost(post);
		return ResponseEntity.ok(post);
	}
	
	@DeleteMapping("/post/deletar/{id}")
	public ResponseEntity<String> excluirComentario(@PathVariable int id){
		servico.excluirPost(id);
		return ResponseEntity.ok("Deletado com sucesso");
	}
	
	

	

}
