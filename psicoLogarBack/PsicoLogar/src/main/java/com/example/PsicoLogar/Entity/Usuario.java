package com.example.PsicoLogar.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.PsicoLogar.Resource.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Usuario extends BaseEntity {

	private String foto;
	private String nome;
	private String email;
	private String senha;
	private String genero;
	private String telefone;
	@Column(name="data_nascimento")
	private String dataNascimento;
	private String endereco;
	@Column(name="tipo_usuario")
	private String tipoUsuario;
	
	@OneToOne(mappedBy = "usuario")
	@JsonIgnoreProperties("usuario")
	private Paciente paciente;
	
	@OneToOne(mappedBy = "usuario")
	@JsonIgnoreProperties("usuario")
	private Psicologo psicologo;
	
	

	public Paciente getPaciente() {
		return paciente;
	}

	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}

	public Psicologo getPsicologo() {
		return psicologo;
	}

	public void setPsicologo(Psicologo psicologo) {
		this.psicologo = psicologo;
	}

	public String getTipoUsuario() {
		return tipoUsuario;
	}

	public void setTipoUsuario(String tipoUsuario) {
		this.tipoUsuario = tipoUsuario;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = new BCryptPasswordEncoder().encode(senha);
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

}
