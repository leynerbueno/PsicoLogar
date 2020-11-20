package com.projetoIntegrador.Psicologar.Repository;

import java.util.Optional;

import com.projetoIntegrador.Psicologar.Entity.Paciente;
import com.projetoIntegrador.Psicologar.Entity.Usuario;
import com.projetoIntegrador.Psicologar.Resource.BaseRepository;

public interface PacienteRepository extends BaseRepository<Paciente> {

	
	public Optional<Usuario> findByEmail(String email);
	
}
