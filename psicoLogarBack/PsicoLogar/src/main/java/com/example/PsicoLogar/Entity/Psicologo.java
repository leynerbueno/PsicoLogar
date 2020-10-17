package com.example.PsicoLogar.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.example.PsicoLogar.Resource.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Psicologo extends BaseEntity{
	private String CRP;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="usuario_id", referencedColumnName = "id")
	private Usuario usuario;
	
	@OneToMany(mappedBy = "psicologo")
	@JsonIgnoreProperties("psicologo")
	private List<Paciente> paciente;
	
	
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

	public List<Paciente> getPaciente() {
		return paciente;
	}

	public void setPaciente(List<Paciente> paciente) {
		this.paciente = paciente;
	}

	
}
