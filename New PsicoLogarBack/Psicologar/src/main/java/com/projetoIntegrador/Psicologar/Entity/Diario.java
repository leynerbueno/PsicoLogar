package com.projetoIntegrador.Psicologar.Entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.projetoIntegrador.Psicologar.Resource.BaseEntity;

@Entity
public class Diario extends BaseEntity{

	private Long emocao1;
	private Long emocao2;
	private Long emocao3;
	private Long emocao4;
	private Long emocao5;
	
	@Column(name="emocao_geral")
	private Long emocaoGeral;
	
	@Column(name="diario_paciente")
	private String diarioPaciente;
	
	@Column(name="comentario_psicologo")
	private String comentarioPsicologo;
	
	private String detalhes;
	
	@Column(name="data_do_diario")
	private String dataDoDiario;
	
	@Column(name="paciente_id",  nullable = false)
	private Long pacienteId;
	
	//relacionamento com a entity paciente
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(referencedColumnName = "id", insertable = false,updatable = false)
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

	public Long getEmocaoGeral() {
		return emocaoGeral;
	}

	public void setEmocaoGeral(Long emocaoGeral) {
		this.emocaoGeral = emocaoGeral;
	}

	public String getDiarioPaciente() {
		return diarioPaciente;
	}

	public void setDiarioPaciente(String diarioPaciente) {
		this.diarioPaciente = diarioPaciente;
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

	public String getDataDoDiario() {
		return dataDoDiario;
	}

	//este metodo vai setar a data de acordo com a data no calendario automaticamente.
	public void setDataDoDiario(String dataDoDiario) {
		this.dataDoDiario = dataDoDiario;
	}

	public Long getPacienteId() {
		return pacienteId;
	}

	public void setPacienteId(Long pacienteId) {
		this.pacienteId = pacienteId;
	}
	
}
