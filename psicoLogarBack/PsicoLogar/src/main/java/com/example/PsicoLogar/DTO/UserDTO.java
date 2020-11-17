package com.example.PsicoLogar.DTO;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

public class UserDTO {
	@Email(message = "Email incorreto!")
	@NotNull(message = "Email é obrigatório!")
	private String email;

	@NotNull(message = "Senha é obrigatória!")
	private String senha;

	public UserDTO() {
	}

	public UserDTO(String email, String senha) {
		this.setEmail(email);
		this.setSenha(senha);
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
		this.senha = senha;
	}

}
