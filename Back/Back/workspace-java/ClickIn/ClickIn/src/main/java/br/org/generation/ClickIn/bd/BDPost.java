package br.org.generation.ClickIn.bd;

import java.util.ArrayList;

import br.org.generation.ClickIn.model.Post;

public class BDPost {
	
private ArrayList<Post> lista;
	
	public BDPost() {
		lista = new ArrayList<Post>();
	}
	
	// Correspondente ao CREATE
	public void gravar(Post p) {
		this.lista.add(p);
		
	}
	// Correspondente ao READ
	public Post buscar(int id) {
		Post p = null;
		for (Post pos: lista) {
			if (pos.getIdPostagem() == id) {
				p = pos;
				break;
			}
		}
		return p;
	}
	
	// Correspondente ao UPDATE
    public void atualizar(Post p) {
    	int posicao=-1;
		for (int i=0; i< lista.size(); i++) {
			if (lista.get(i).getIdPostagem() == p.getIdPostagem()) {
				posicao = i;
				break;
			}
		}
		
		System.out.println("Posicao encontrada = "+posicao);
		if (posicao >=0) {
			lista.set(posicao,p);
		}	
		
		System.out.println("LISTA ATUALIZADA");
		System.out.println(lista);
		System.out.println("----------");
	}
    // Correspondente ao DELETE
	public boolean apagar(int id) {
		int posicao=-1;
		for (int i=0; i< lista.size(); i++) {
			if (lista.get(i).getIdPostagem() == id) {
				posicao = i;
				break;
			}
		}
		if (posicao >=0) {
			lista.remove(posicao);
			return true;
		}
		return false;				
	}
	
	public ArrayList<Post> buscarTodos(){
		return lista;
	}

}
