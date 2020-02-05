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

import br.org.generation.ClickIn.model.InfoUsuario;
import br.org.generation.ClickIn.services.IInfoUsuarioService;

@RestController
@CrossOrigin("*")
public class InfoUsuarioController {
	@Autowired
	private IInfoUsuarioService servico;
	
	@PostMapping("/infoUsuario/novo")
	public ResponseEntity<InfoUsuario> inserirNovoInfoUsuario(@RequestBody InfoUsuario infoUsuario) {
		try {
			servico.gravarInfo(infoUsuario);
			return ResponseEntity.ok(infoUsuario);
			
		}catch(Exception ex) {
			return ResponseEntity.badRequest().build();
		}
	}
	@GetMapping("/infoUsuario/{id}")
	public ResponseEntity<InfoUsuario> buscarInfoUsuarioPeloId(@PathVariable int id){
		InfoUsuario p =servico.recuperarPorId(id);
		if(p != null) {
			return ResponseEntity.ok(p);
		}
		return ResponseEntity.notFound().build();
		
	}

	@PutMapping("/infoUsuario/alterar")
	public ResponseEntity<InfoUsuario> atualizarDados(@RequestBody InfoUsuario infoUsuario){
		servico.atualizarInfo(infoUsuario);
		return ResponseEntity.ok(infoUsuario);
	}
	
	@DeleteMapping("/infoUsuario/deletar/{id}")
	public ResponseEntity<String> excluirInfoUsuario(@PathVariable int id){
		servico.excluirInfoUsuario(id);
		return ResponseEntity.ok("Deletado com sucesso");
	}

	
}
