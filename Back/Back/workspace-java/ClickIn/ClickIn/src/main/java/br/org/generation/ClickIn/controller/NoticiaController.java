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

import br.org.generation.ClickIn.model.Noticia;
import br.org.generation.ClickIn.services.INoticiaService;

@RestController
@CrossOrigin("*")
public class NoticiaController {
	
	@Autowired
	private INoticiaService servico;

	@PostMapping("/noticia/novo")
	public ResponseEntity<Noticia> inserirNovaNoticia(@RequestBody Noticia noticia) {
		try {
			servico.gravarNoticia(noticia);
			return ResponseEntity.ok(noticia);

		} catch (Exception ex) {
			return ResponseEntity.badRequest().build();
		}
	}

	@GetMapping("/noticia/{id}")
	public ResponseEntity<Noticia> buscarNoticiaPeloId(@PathVariable int id) {
		Noticia p =servico.recuperarPorId(id);
		if(p != null) {
			return ResponseEntity.ok(p);
		}
		return ResponseEntity.notFound().build();

	}

	@PutMapping("/noticia/alterar")
	public ResponseEntity<Noticia> atualizarDados(@RequestBody Noticia noticia) {
		servico.atualizarNoticia(noticia);
		return ResponseEntity.ok(noticia);
	}
	
	@DeleteMapping("/noticia/deletar/{id}")
	public ResponseEntity<String> excluirNoticia(@PathVariable int id){
		servico.excluirNoticia(id);
		return ResponseEntity.ok("Deletado com sucesso");
	}

}
