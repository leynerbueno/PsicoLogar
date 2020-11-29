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

import com.projetoIntegrador.Psicologar.Entity.Psicologo;
import com.projetoIntegrador.Psicologar.Repository.PsicologoRepository;
import com.projetoIntegrador.Psicologar.Resource.BaseController;
import com.projetoIntegrador.Psicologar.Service.PsicologoService;

@RestController
@RequestMapping("/psicologos")
public class PsicologoController extends BaseController<Psicologo,PsicologoRepository,PsicologoService> {

	@Autowired
	private PsicologoService psicologoService;
	
	
	@PostMapping("/registro")
	@Transactional
	public ResponseEntity<Psicologo> registro(@Valid @RequestBody Psicologo psicologoDto) {
		Psicologo psicologo = psicologoService.registro(psicologoDto);
		return ResponseEntity.status(HttpStatus.CREATED).body(psicologo);
	}
}
