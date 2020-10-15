package com.example.PsicoLogar.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.example.PsicoLogar.Resource.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Paciente extends BaseEntity {

	private String consulta;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "usuario_id", referencedColumnName = "id")
	private Usuario usuario;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "psicologo_id", referencedColumnName = "id")
	@JsonIgnoreProperties("paciente")
	private Psicologo psicologo;

	@OneToMany(mappedBy = "paciente")
	@JsonIgnoreProperties("paciente")
	private List<Diario> diario;

	public List<Diario> getDiario() {
		return diario;
	}

	public void setDiario(List<Diario> diario) {
		this.diario = diario;
	}

	public String getConsulta() {
		return consulta;
	}

	public void setConsulta(String consulta) {
		this.consulta = consulta;
	}

	public Psicologo getPsicologo() {
		return psicologo;
	}

	public void setPsicologo(Psicologo psicologo) {
		this.psicologo = psicologo;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

}
