package br.org.generation.ClickIn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="infoUsuario")
public class InfoUsuario {
	
	@Id
	@Column(name="idInfo")
	private int idInfo;
	
	@Column(name="cpf", length=11)
	private String cpf;
	
	@Column(name="endereco", length=150)
	private String endereco;
	
	@Column(name="setor", length=60)
	private String setor;
	
	@Column(name="cargo", length=80)
	private String cargo;
	
	@Column(name="infoAcademica", length=600)
	private String infoAcademica;
	
	@Column(name="fotodoPerfil", length=300)
	private String fotodoPerfil;
	
	@Column(name="infoProfissional", length=600)
	private String infoProfissional;
	
	@Column(name="infoEmpresa", length=600)
	private String infoEmpresa;
	
	@Column(name="infoVagas", length=600)
	private String infoVagas;
	
	@OneToOne
	private Usuario usuario;
	
	
	public int getIdInfo() {
		return idInfo;
	}
	public void setIdInfo(int idInfo) {
		this.idInfo = idInfo;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getSetor() {
		return setor;
	}
	public void setSetor(String setor) {
		this.setor = setor;
	}
	public String getCargo() {
		return cargo;
	}
	public void setCargo(String cargo) {
		this.cargo = cargo;
	}
	public String getInfoAcademica() {
		return infoAcademica;
	}
	public void setInfoAcademica(String infoAcademica) {
		this.infoAcademica = infoAcademica;
	}
	public String getFotodoPerfil() {
		return fotodoPerfil;
	}
	public void setFotodoPerfil(String fotodoPerfil) {
		this.fotodoPerfil = fotodoPerfil;
	}
	public String getInfoProfissional() {
		return infoProfissional;
	}
	public void setInfoProfissional(String infoProfissional) {
		this.infoProfissional = infoProfissional;
	}
	public String getInfoEmpresa() {
		return infoEmpresa;
	}
	public void setInfoEmpresa(String infoEmpresa) {
		this.infoEmpresa = infoEmpresa;
	}
	public String getInfoVagas() {
		return infoVagas;
	}
	public void setInfoVagas(String infoVagas) {
		this.infoVagas = infoVagas;
	}
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	

}
