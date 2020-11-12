package com.example.PsicoLogar.DTO;

public class JwtResponseDTO {

	private String token;

	public JwtResponseDTO() {
	}

	public JwtResponseDTO(String token) {
		this.token = token;
	}

	public String getToken() {
		return this.token;
	}

	public void setToken(String token) {
		this.token = token;
	}

}
