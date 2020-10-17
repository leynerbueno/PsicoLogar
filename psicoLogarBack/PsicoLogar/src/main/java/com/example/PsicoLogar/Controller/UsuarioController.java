package com.example.PsicoLogar.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.PsicoLogar.Entity.Usuario;
import com.example.PsicoLogar.Repository.UsuarioRepository;
import com.example.PsicoLogar.Resource.BaseController;
import com.example.PsicoLogar.Service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController  extends BaseController<Usuario,UsuarioRepository,UsuarioService> {

}
