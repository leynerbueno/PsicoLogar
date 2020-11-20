package com.projetoIntegrador.Psicologar.Service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.projetoIntegrador.Psicologar.Entity.Usuario;
import com.projetoIntegrador.Psicologar.Repository.PacienteRepository;
import com.projetoIntegrador.Psicologar.Repository.PsicologoRepository;

@Service
public class JwtUserDetailsService  implements UserDetailsService{

	@Autowired
	private PsicologoRepository psicologoRepository;
	
	@Autowired
	private PacienteRepository pacienteRepository;

	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Optional<Usuario> optional = psicologoRepository.findByEmail(email);
		Optional<Usuario> optional1 = pacienteRepository.findByEmail(email);
		if (optional.isPresent()) {
			Usuario usuario = optional.get();
			return new User(usuario.getEmail(), usuario.getSenha(), new ArrayList<>());
		} 
		else if(optional1.isPresent()){
			Usuario usuario = optional1.get();
			return new User(usuario.getEmail(), usuario.getSenha(), new ArrayList<>());
		}
		else {
		
			throw new UsernameNotFoundException("Usuário não encontrado com o email: " + email);
		}
	}
}
