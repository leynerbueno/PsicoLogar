package com.projetoIntegrador.Psicologar.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetoIntegrador.Psicologar.Entity.Paciente;
import com.projetoIntegrador.Psicologar.Repository.PacienteRepository;
import com.projetoIntegrador.Psicologar.Resource.BaseController;
import com.projetoIntegrador.Psicologar.Service.PacienteService;

@RestController
@RequestMapping("/pacientes")
public class PacienteController extends BaseController<Paciente,PacienteRepository,PacienteService> {

	@Autowired
	private PacienteService pacienteService;
	
	@PostMapping("/registro")
	@Transactional
	public ResponseEntity<Paciente> registro(@Valid @RequestBody Paciente pacienteDto) {
		Paciente paciente = pacienteService.registro(pacienteDto);
		return ResponseEntity.status(HttpStatus.CREATED).body(paciente);
	}
}
