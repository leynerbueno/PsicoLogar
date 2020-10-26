package com.example.PsicoLogar.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PsicoLogar.Entity.Psicologo;
import com.example.PsicoLogar.Repository.PsicologoRepository;
import com.example.PsicoLogar.Resource.BaseController;
import com.example.PsicoLogar.Service.PsicologoService;

@RestController
@RequestMapping("/psicologos")
public class PsicologoController extends BaseController<Psicologo,PsicologoRepository,PsicologoService>{

}
