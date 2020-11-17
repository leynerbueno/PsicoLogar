package com.example.PsicoLogar.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.PsicoLogar.Resource.BaseEntity;

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
	private String tipoUsuario;
	
	
	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
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

	public String getTipoUsuario() {
		return tipoUsuario;
	}

	public void setTipoUsuario(String tipoUsuario) {
		this.tipoUsuario = tipoUsuario;
	}

}
