package com.projetoIntegrador.Psicologar.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetoIntegrador.Psicologar.Entity.Diario;
import com.projetoIntegrador.Psicologar.Repository.DiarioRepository;
import com.projetoIntegrador.Psicologar.Resource.BaseController;
import com.projetoIntegrador.Psicologar.Service.DiarioService;

@RestController
@RequestMapping("/diarios")
public class DiarioController extends BaseController<Diario,DiarioRepository,DiarioService> {

}
