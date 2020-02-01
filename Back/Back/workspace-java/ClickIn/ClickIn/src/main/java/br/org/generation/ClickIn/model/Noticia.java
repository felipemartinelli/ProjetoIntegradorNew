package br.org.generation.ClickIn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="noticia")
public class Noticia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idNoticia")
	private int idNoticia;
	
	@Column(name="titulo", length=100)
	private String titulo;
	
	@Column(name="texto", length=500)
	private String texto;
	
	@Column(name="dataNoticia", length=30)
	private String dataNoticia;
	
	@Column(name="imagem", length=300)
	private String imagem;
	
	public int getIdNoticia() {
		return idNoticia;
	}
	public void setIdNoticia(int idNoticia) {
		this.idNoticia = idNoticia;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}
	public String getDataNoticia() {
		return dataNoticia;
	}
	public void setDataNoticia(String dataNoticia) {
		this.dataNoticia = dataNoticia;
	}
	public String getImagem() {
		return imagem;
	}
	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	

}
