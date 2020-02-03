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
import br.org.generation.ClickIn.model.Usuario;
import br.org.generation.ClickIn.services.IUsuarioService;

@RestController
@CrossOrigin("*")
public class UsuarioController {
	@Autowired
	private IUsuarioService servico;
	
	@PostMapping("/usuario/novo")
	public ResponseEntity<Usuario> inserirNovoUsuario(@RequestBody Usuario usuario) {
		try {
			servico.gravarUsuario(usuario);
			return ResponseEntity.ok(usuario);
			
		}catch(Exception ex) {
			return ResponseEntity.badRequest().build();
		}
	}
	@GetMapping("/usuario/{id}")
	public ResponseEntity<Usuario> buscarUsuarioPeloId(@PathVariable int id){
		Usuario p =servico.recuperarPorId(id);
		if(p != null) {
			return ResponseEntity.ok(p);
		}
		return ResponseEntity.notFound().build();		
	}

	@PutMapping("/usuario/alterar")
	public ResponseEntity<Usuario> atualizarDados(@RequestBody Usuario usuario){
		servico.atualizarUsuario(usuario);
		return ResponseEntity.ok(usuario);
	}
	
	@DeleteMapping("/usuario/deletar/{id}")
	public ResponseEntity<String> excluirUsuario(@PathVariable int id){
		servico.excluirUsuario(id);
		return ResponseEntity.ok("Deletado com sucesso");
	}
	
	@GetMapping("/usuario/todos")
	public ResponseEntity<List<Usuario>> mostrarTodos() {
		return ResponseEntity.ok(servico.recuperarTodos());
	}

}
