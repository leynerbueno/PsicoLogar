package com.projetoIntegrador.Psicologar.Repository;

import java.util.Optional;

import com.projetoIntegrador.Psicologar.Entity.Psicologo;
import com.projetoIntegrador.Psicologar.Entity.Usuario;
import com.projetoIntegrador.Psicologar.Resource.BaseRepository;

public interface PsicologoRepository extends BaseRepository<Psicologo>{
	
	public Optional<Psicologo> findByEmail(String email);
}

