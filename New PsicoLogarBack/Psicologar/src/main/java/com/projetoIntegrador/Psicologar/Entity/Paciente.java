package com.projetoIntegrador.Psicologar.Entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Paciente extends Usuario {

	@Column(name="data_da_consulta")
	private String dataDaConsulta;
	
	@Column(name="psicologo_id", nullable = false)
	private Long psicologoId;
	
	//relacionamento com a entity psicologo
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(referencedColumnName = "id", insertable = false,updatable = false)
	private Psicologo psicologo;
	
	//relacionamento com a tabela diario.
	@OneToMany(mappedBy = "paciente")
	@JsonIgnoreProperties("paciente")
	private List<Diario> diario;

	//construtor da entity Paciente com os dados de usuario.
	public Paciente(String foto, String nome, LocalDate dataDeNascimento, String genero, String email, String senha,
			String endereco,String dataDaConsulta,Long psicologoId) {
		super(foto, nome, dataDeNascimento, genero, email, senha, endereco);
		this.dataDaConsulta = dataDaConsulta;
		this.psicologoId = psicologoId;
	}
	
	public Paciente() {
		
	}
	
	
	public String getDataDaConsulta() {
		return dataDaConsulta;
	}

	public void setDataDaConsulta(String dataDaConsulta) {
		this.dataDaConsulta = dataDaConsulta;
	}

	public Long getPsicologoId() {
		return psicologoId;
	}

	public void setPsicologoId(Long psicologoId) {
		this.psicologoId = psicologoId;
	}

	public List<Diario> getDiario() {
		return diario;
	}

	public void setDiario(List<Diario> diario) {
		this.diario = diario;
	}
	
	
}
