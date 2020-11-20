package com.projetoIntegrador.Psicologar.Entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.projetoIntegrador.Psicologar.Resource.BaseEntity;


@MappedSuperclass
public class Usuario extends BaseEntity {

	private String foto;
	private String nome;
	
	@Column(name="data_de_nascimento")
	private LocalDate dataDeNascimento;
	
	private String telefone;
	private String genero;
	private String email;
	private String senha;
	private String endereco;
	

	public Usuario() {
		
	}
	
	public Usuario(String foto, String nome, LocalDate dataDeNascimento, String telefone, String genero, String email,
			String senha, String endereco) {
		super();
		this.foto = foto;
		this.nome = nome;
		this.dataDeNascimento = dataDeNascimento;
		this.telefone = telefone;
		this.genero = genero;
		this.email = email;
		this.senha = senha;
		this.endereco = endereco;
	}

	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha =  new BCryptPasswordEncoder().encode(senha);
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
	public LocalDate getDataDeNascimento() {
		return dataDeNascimento;
	}
	public void setDataDeNascimento(LocalDate dataDeNascimento) {
		this.dataDeNascimento = dataDeNascimento;
	}
	public String getGenero() {
		return genero;
	}
	public void setGenero(String genero) {
		this.genero = genero;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	
	
}