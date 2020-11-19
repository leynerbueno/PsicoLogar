package com.example.PsicoLogar.Repository;

import com.example.PsicoLogar.Entity.Psicologo;
import com.example.PsicoLogar.Resource.BaseRepository;

public interface PsicologoRepository extends BaseRepository<Psicologo> {
	
	Psicologo findByUsuarioId(Long usuarioId);
}
