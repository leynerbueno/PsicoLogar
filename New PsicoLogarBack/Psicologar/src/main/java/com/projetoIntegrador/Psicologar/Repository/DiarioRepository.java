package com.projetoIntegrador.Psicologar.Repository;

import java.time.LocalDate;
import java.util.List;

import com.projetoIntegrador.Psicologar.Entity.Diario;
import com.projetoIntegrador.Psicologar.Resource.BaseRepository;

public interface DiarioRepository extends BaseRepository<Diario>{

	List<Diario> findAllByPacienteIdAndDataDoDiario(Long Id, LocalDate dataDoDiario);
}
