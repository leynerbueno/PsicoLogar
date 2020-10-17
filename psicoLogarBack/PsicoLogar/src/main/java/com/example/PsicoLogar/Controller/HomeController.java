package com.example.PsicoLogar.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@RestController
@Api(tags = "Home", description = "Esse Controller é responsavel pelos endpoints da home")
public class HomeController {

	@GetMapping("/")
	@ApiOperation(value = "Bem Vindo", notes = "Esse endpoint vai renderizar um Bem Vindo")
	public String home() {
		return "<h1>Bem vindo ao PsicoLogar</h1>";
	}

	@ApiOperation(value = "Lista usuarios", notes = "Esse método é responsavel por listar os usuarios")
	@ApiImplicitParams(@ApiImplicitParam(name = "nome", value = "Nome do Usuario"))
	@GetMapping("/usuarios/{nome}")
	public String contatos(@ApiParam(name = "nome", value = "Nome do Usuario") @PathVariable("nome") String nome) {
		return "Usuários: " + nome;
	}
}
