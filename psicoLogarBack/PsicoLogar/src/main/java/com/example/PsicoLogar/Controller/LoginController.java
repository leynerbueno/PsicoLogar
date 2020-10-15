package com.example.PsicoLogar.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.PsicoLogar.DTO.JwtResponseDTO;
import com.example.PsicoLogar.DTO.LoginDTO;
import com.example.PsicoLogar.Service.UsuarioService;

@RestController
@CrossOrigin
public class LoginController {

	@Autowired
	private UsuarioService usuarioService;

	@PostMapping("/login")
	public ResponseEntity<?> createAuthenticationToken(@Valid @RequestBody LoginDTO loginDTO) throws Exception {
		String token = usuarioService.login(loginDTO);
		return ResponseEntity.ok(new JwtResponseDTO(token)); // retorna para o usuário o token
	}

}
