package br.org.generation.ClickIn.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="post")
public class Post {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="idPostagem")
	private int idPostagem;
	
	@Column(name="texto", length=200)
	private String texto;
	
	@Column(name="dataInclusao", length=30)
	private String dataInclusao;
	
	@Column(name="imagem", length=300)
	private String imagem;
	
	@ManyToOne
	@JsonIgnoreProperties("posts")
	private Usuario usuario;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "post")
	@JsonIgnoreProperties("post")
	private List<Comentario> comentarios;
	
	public int getIdPostagem() {
		return idPostagem;
	}
	public void setIdPostagem(int idPostagem) {
		this.idPostagem = idPostagem;
	}

	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}
	public String getImagem() {
		return imagem;
	}
	public void setImagem(String linkImage) {
		this.imagem = linkImage;
	}
	public String getDataInclusao() {
		return dataInclusao;
	}
	public void setDataInclusao(String dataInclusao) {
		this.dataInclusao = dataInclusao;
	}
	
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public String toString() {
		return "POST="+texto;
	}
}
