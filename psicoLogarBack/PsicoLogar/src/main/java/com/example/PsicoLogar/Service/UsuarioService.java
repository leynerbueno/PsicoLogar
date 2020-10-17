package com.example.PsicoLogar.Service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.PsicoLogar.Config.JwtTokenUtil;
import com.example.PsicoLogar.Entity.Usuario;
import com.example.PsicoLogar.Repository.UsuarioRepository;
import com.example.PsicoLogar.DTO.LoginDTO;

@Service
public class UsuarioService implements UserDetailsService {

	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException { // carrega o usuário por
																							// email
		Optional<Usuario> optional = usuarioRepository.findByEmail(email);
		if (optional.isPresent()) {
			Usuario usuario = optional.get();
			return new User(usuario.getEmail(), usuario.getSenha(), new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("Usuário não encontrado com o email: " + email);
		}
	}

	private void authenticate(String email, String senha) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, senha));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("Email e/ou senha está incorreto", e);
		}
	}

	public String login(LoginDTO loginDTO) throws Exception {
		this.authenticate(loginDTO.getEmail(), loginDTO.getSenha()); // validar email e senha

		UserDetails userDetails = this.loadUserByUsername(loginDTO.getEmail()); // recuperar o usuário
		String token = jwtTokenUtil.generateToken(userDetails); // gerar o token

		return token;
	}
}
