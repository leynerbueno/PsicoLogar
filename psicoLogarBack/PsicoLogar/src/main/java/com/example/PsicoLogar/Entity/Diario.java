package com.example.PsicoLogar.Entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.example.PsicoLogar.Resource.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Diario extends BaseEntity {

	private Long emocao1;
	private Long emocao2;
	private Long emocao3;
	private Long emocao4;
	private Long emocao5;
	private Long emocaoGeral;
	private String comentarioPaciente;
	private String comentarioPsicologo;
	private String detalhes;
	private LocalDate dataDoDiario;
	
	@Column(name = "paciente_id", nullable = false)
	private int pacienteId;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(referencedColumnName = "id", insertable = false,updatable = false)
	@JsonIgnoreProperties("paciente")
	private Paciente paciente;


	public Long getEmocao1() {
		return emocao1;
	}

	public void setEmocao1(Long emocao1) {
		this.emocao1 = emocao1;
	}

	public Long getEmocao2() {
		return emocao2;
	}

	public void setEmocao2(Long emocao2) {
		this.emocao2 = emocao2;
	}

	public Long getEmocao3() {
		return emocao3;
	}

	public void setEmocao3(Long emocao3) {
		this.emocao3 = emocao3;
	}

	public Long getEmocao4() {
		return emocao4;
	}

	public void setEmocao4(Long emocao4) {
		this.emocao4 = emocao4;
	}

	public Long getEmocao5() {
		return emocao5;
	}

	public void setEmocao5(Long emocao5) {
		this.emocao5 = emocao5;
	}

	public Paciente getPaciente() {
		return paciente;
	}

	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}


	public Long getEmocaoGeral() {
		return emocaoGeral;
	}

	public void setEmocaoGeral(Long emocaoGeral) {
		this.emocaoGeral = emocaoGeral;
	}

	public String getComentarioPaciente() {
		return comentarioPaciente;
	}

	public void setComentarioPaciente(String comentarioPaciente) {
		this.comentarioPaciente = comentarioPaciente;
	}

	public String getComentarioPsicologo() {
		return comentarioPsicologo;
	}

	public void setComentarioPsicologo(String comentarioPsicologo) {
		this.comentarioPsicologo = comentarioPsicologo;
	}

	public String getDetalhes() {
		return detalhes;
	}

	public void setDetalhes(String detalhes) {
		this.detalhes = detalhes;
	}

	public LocalDate getDataDoDiario() {
		return dataDoDiario;
	}

	public void setDataDoDiario() {
		this.dataDoDiario = LocalDate.now();
	}

	public int getPacienteId() {
		return pacienteId;
	}

	public void setPacienteId(int pacienteId) {
		this.pacienteId = pacienteId;
	}

	public void setDataDoDiario(LocalDate dataDoDiario) {
		this.dataDoDiario = dataDoDiario;
	}
	
	

}
