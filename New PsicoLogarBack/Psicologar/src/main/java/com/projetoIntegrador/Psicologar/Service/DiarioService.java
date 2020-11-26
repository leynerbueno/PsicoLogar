package com.projetoIntegrador.Psicologar.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.projetoIntegrador.Psicologar.Entity.Diario;
import com.projetoIntegrador.Psicologar.Repository.DiarioRepository;
import com.projetoIntegrador.Psicologar.Resource.BaseService;



@Service
public class DiarioService extends BaseService<Diario, DiarioRepository>{

	@Autowired
	private DiarioRepository diarioRepository;
	
	@GetMapping("/{pacienteId}/{dataDoDiario}")
	List<Diario> getdiarioData(Long pacienteId, LocalDate dataDoDiario) {
		List<Diario> diarioDoDia = diarioRepository.findAllByPacienteIdAndDataDoDiario(pacienteId, dataDoDiario);
		return diarioDoDia;
	}
}
