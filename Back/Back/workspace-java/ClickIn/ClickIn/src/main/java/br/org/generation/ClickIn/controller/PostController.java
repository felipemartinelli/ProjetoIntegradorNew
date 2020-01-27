package br.org.generation.ClickIn.controller;

import java.util.ArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.ClickIn.bd.BDPost;
import br.org.generation.ClickIn.model.Post;

@RestController
@CrossOrigin("*")
public class PostController {
	
	private BDPost bd = new BDPost();
	
	@PostMapping("/post/novo")
	public ResponseEntity<Post> novoPost(@RequestBody Post posts) {
		bd.gravar(posts);
		return ResponseEntity.ok(posts);
	}
	
	@GetMapping("/post/{id}")
	public ResponseEntity<Post> getPost(@PathVariable int id){
		Post pos = bd.buscar(id);
		if (pos != null) {  // encontrei um cliente com o ID especificado
			return ResponseEntity.ok(pos);
		}
		else {
			return ResponseEntity.notFound().build();
		}		
	}
	
	@GetMapping("/post/todos")
	public ResponseEntity<ArrayList<Post>> getAllPosts(){
			return ResponseEntity.ok(bd.buscarTodos());
		
	}
	
	@PutMapping("/post/alterar")
	public ResponseEntity<Post> alteraPost(@RequestBody Post post){
		System.out.println(post);
		bd.atualizar(post);
		return ResponseEntity.ok(post);
	}
	
	@DeleteMapping("/post/{id}")
	public ResponseEntity<String> removeCliente(@PathVariable int id){
		if (bd.apagar(id)) {
			return ResponseEntity.ok("DELETED");
		}
		else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	

}
