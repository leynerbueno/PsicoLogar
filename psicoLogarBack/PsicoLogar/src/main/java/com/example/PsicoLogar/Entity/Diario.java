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

	private Long afetividade;
	private Long alegria;
	private Long autruismo;
	private Long amor;
	private Long bemEstar;
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


	public Paciente getPaciente() {
		return paciente;
	}

	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}

	public Long getAfetividade() {
		return afetividade;
	}

	public void setAfetividade(Long afetividade) {
		this.afetividade = afetividade;
	}

	public Long getAlegria() {
		return alegria;
	}

	public void setAlegria(Long alegria) {
		this.alegria = alegria;
	}

	public Long getAutruismo() {
		return autruismo;
	}

	public void setAutruismo(Long autruismo) {
		this.autruismo = autruismo;
	}

	public Long getAmor() {
		return amor;
	}

	public void setAmor(Long amor) {
		this.amor = amor;
	}

	public Long getBemEstar() {
		return bemEstar;
	}

	public void setBemEstar(Long bemEstar) {
		this.bemEstar = bemEstar;
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
