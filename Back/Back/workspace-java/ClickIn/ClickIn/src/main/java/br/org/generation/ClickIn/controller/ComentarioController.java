package br.org.generation.ClickIn.controller;

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

import br.org.generation.ClickIn.model.Comentario;
import br.org.generation.ClickIn.services.IComentarioService;

@RestController
@CrossOrigin("*")
public class ComentarioController {
	@Autowired
	private IComentarioService servico;
	
	@PostMapping("/comentario/novo")
	public ResponseEntity<Comentario> inserirNovoComentario(@RequestBody Comentario comentario) {
		try {
			servico.gravarComentario(comentario);
			return ResponseEntity.ok(comentario);
			
		}catch(Exception ex) {
			return ResponseEntity.badRequest().build();
		}
	}
	@GetMapping("/comentario/{id}")
	public ResponseEntity<Comentario> buscarComentarioPeloId(@PathVariable int id){
			Comentario p =servico.recuperarPorId(id);
			if(p != null) {
				return ResponseEntity.ok(p);
			}
			return ResponseEntity.notFound().build();
		
	}

	@PutMapping("/comentario/alterar")
	public ResponseEntity<Comentario> atualizarDados(@RequestBody Comentario comentario){
		servico.atualizarComentario(comentario);
		return ResponseEntity.ok(comentario);
	}
	
	@DeleteMapping("/comentario/deletar/{id}")
	public ResponseEntity<String> excluirComentario(@PathVariable int id){
		servico.excluirComentario(id);
		return ResponseEntity.ok("Deletado com sucesso");
	}


}
