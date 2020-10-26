package com.example.PsicoLogar.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PsicoLogar.Entity.Diario;
import com.example.PsicoLogar.Repository.DiarioRepository;
import com.example.PsicoLogar.Resource.BaseController;
import com.example.PsicoLogar.Service.DiarioService;

@RestController
@RequestMapping("/diarios")
public class DiarioController extends BaseController<Diario,DiarioRepository,DiarioService> {
	
}
