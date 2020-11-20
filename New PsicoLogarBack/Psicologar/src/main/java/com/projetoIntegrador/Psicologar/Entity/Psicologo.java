package com.projetoIntegrador.Psicologar.Entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Psicologo extends Usuario {

	private String crp;

	//relacionamento com a tabela paciente.
	@OneToMany(mappedBy = "psicologo")
	@JsonIgnoreProperties("psicologo")
	private List<Paciente> paciente;

		//construtor da entity Psicologo com os dados de usuario.
		public Psicologo(String foto, String nome, LocalDate dataDeNascimento, String genero, String email,
				String senha, String endereco,String crp) {
			super(foto, nome, dataDeNascimento, genero, email, senha, endereco);
			this.crp = crp;
		}	
		
		public Psicologo() {
			
		}

		public String getCrp() {
			return crp;
		}

		public void setCrp(String crp) {
			this.crp = crp;
		}


		public List<Paciente> getPaciente() {
			return paciente;
		}

		public void setPaciente(List<Paciente> paciente) {
			this.paciente = paciente;
		}
			
}
