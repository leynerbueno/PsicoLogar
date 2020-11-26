package com.projetoIntegrador.Psicologar.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetoIntegrador.Psicologar.Entity.Paciente;
import com.projetoIntegrador.Psicologar.Repository.PacienteRepository;
import com.projetoIntegrador.Psicologar.Resource.BaseController;
import com.projetoIntegrador.Psicologar.Service.PacienteService;

@RestController
@RequestMapping("/pacientes")
public class PacienteController extends BaseController<Paciente,PacienteRepository,PacienteService> {

}
