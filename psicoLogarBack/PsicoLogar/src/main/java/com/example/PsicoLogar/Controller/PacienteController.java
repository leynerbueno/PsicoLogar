package com.example.PsicoLogar.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PsicoLogar.Entity.Paciente;
import com.example.PsicoLogar.Repository.PacienteRepository;
import com.example.PsicoLogar.Resource.BaseController;
import com.example.PsicoLogar.Service.PacienteService;

@RestController
@RequestMapping("/pacientes")
public class PacienteController extends BaseController<Paciente,PacienteRepository,PacienteService> {

}
