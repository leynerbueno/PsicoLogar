package com.example.PsicoLogar.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.PsicoLogar.Entity.Diario;
import com.example.PsicoLogar.Repository.DiarioRepository;
import com.example.PsicoLogar.Resource.BaseService;

@Service
public class DiarioService extends BaseService<Diario, DiarioRepository> {
	
	private DiarioRepository diarioRepository;

	@GetMapping("/{pacienteId}/{dataDoDiario}")
	List<Diario> selecionarDiarioDoDia(Long pacienteId, LocalDate dataDoDiario) {

		List<Diario> diarioDoDia = diarioRepository.findAllByPacienteIdAndDataDoDiario(pacienteId, dataDoDiario);
		return diarioDoDia;
	}
}
