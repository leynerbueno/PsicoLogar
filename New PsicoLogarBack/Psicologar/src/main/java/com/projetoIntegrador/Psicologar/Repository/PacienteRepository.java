package com.projetoIntegrador.Psicologar.Repository;

import java.util.Optional;

import com.projetoIntegrador.Psicologar.Entity.Paciente;
import com.projetoIntegrador.Psicologar.Entity.Psicologo;
import com.projetoIntegrador.Psicologar.Resource.BaseRepository;

public interface PacienteRepository extends BaseRepository<Paciente> {

	
	public Optional<Paciente> findByEmail(String email);
	
	public Optional<Paciente> findByTokenConfirmation(String tokenCOnfirmation);
}
