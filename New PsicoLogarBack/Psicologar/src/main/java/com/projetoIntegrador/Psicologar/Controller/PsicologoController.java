package com.projetoIntegrador.Psicologar.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetoIntegrador.Psicologar.Entity.Psicologo;
import com.projetoIntegrador.Psicologar.Repository.PsicologoRepository;
import com.projetoIntegrador.Psicologar.Resource.BaseController;
import com.projetoIntegrador.Psicologar.Service.PsicologoService;

@RestController
@RequestMapping("/psicologos")
public class PsicologoController extends BaseController<Psicologo,PsicologoRepository,PsicologoService> {

}
