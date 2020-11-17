package com.example.PsicoLogar.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.example.PsicoLogar.Resource.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Psicologo extends BaseEntity{
	private String CRP;
	
	@Column(name = "usuario_id", nullable = false)
	private Long usuarioId;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(referencedColumnName = "id", insertable = false, updatable = false)
	private Usuario usuario;
	
	//@OneToMany(mappedBy = "psicologo")
	//@JsonIgnoreProperties("psicologo")
	//private List<Paciente> pacientes;
	
	
	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getCRP() {
		return CRP;
	}

	public void setCRP(String CRP) {
		this.CRP = CRP;
	}

	//public List<Paciente> getPacientes() {
	//	return pacientes;
	//}

	//public void setPacientes(List<Paciente> pacientes) {
	//	this.pacientes = pacientes;
//	}

	public Long getUsuarioId() {
		return usuarioId;
	}

	public void setUsuarioId(Long usuarioId) {
		this.usuarioId = usuarioId;
	}

	
}
