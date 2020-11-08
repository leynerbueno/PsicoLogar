package com.example.PsicoLogar.Repository;

import java.time.LocalDate;
import java.util.List;

import com.example.PsicoLogar.Entity.Diario;
import com.example.PsicoLogar.Resource.BaseRepository;

public interface DiarioRepository extends BaseRepository<Diario>{

	List<Diario> findAllByPacienteIdAndDataDoDiario(Long pacienteId, LocalDate dataDoDiario);	
}
