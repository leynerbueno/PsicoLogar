package com.example.PsicoLogar.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Optional;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.PsicoLogar.Entity.Paciente;
import com.example.PsicoLogar.Entity.Psicologo;
import com.example.PsicoLogar.Entity.Usuario;
import com.example.PsicoLogar.Repository.UsuarioRepository;
import com.example.PsicoLogar.Resource.BaseService;

@Service
public class UsuarioService extends BaseService<Usuario, UsuarioRepository> {

	@Autowired
	private UsuarioRepository usuarioRepository;
	private Psicologo psicologo = new Psicologo();
	private Paciente paciente = new Paciente();
	private PacienteService pacienteService;
	private PsicologoService psicologoService;

	public Usuario getUser() {
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Optional<Usuario> optional = usuarioRepository.findByEmail(user.getUsername());
		return optional.get();
	}

	@Override
	public Usuario insert(Usuario entity) {
		if (entity.getFoto() != null && !entity.getFoto().startsWith("http")) {
			String urlDaImagem = saveBase64(entity.getFoto());
			entity.setFoto(urlDaImagem);
		}
		super.insert(entity);
		
		if(entity != null) {
			Long usuarioId = entity.getId();
			String tipoUsuario = entity.getTipoUsuario();
			System.out.println(usuarioId);
			if (tipoUsuario == "Psicologo") {
				System.out.println("ENtrei psicologo");
				psicologo.setUsuarioId(usuarioId);
				System.out.println(psicologo);
				psicologoService.insert(psicologo);
			} else {
				System.out.println("ENtrei paciente");
				paciente.setUsuarioId(usuarioId);
				System.out.println(paciente.toString());
				pacienteService.insert(paciente);
			}
		}
		
		return entity;
	}

	private String saveBase64(String base64Str) {
		String path = Paths.get("src/main/resources/images").toString();

		String fileName = UUID.randomUUID().toString().replaceAll("-", "");

		if (base64Str.isEmpty()) {
			return null;
		} else if (base64Str.indexOf("data:image/png;") != -1) {
			base64Str = base64Str.replace("data:image/png;base64,", "");
			fileName += ".png";
		} else if (base64Str.indexOf("data:image/jpeg;") != -1) {
			base64Str = base64Str.replace("data:image/jpeg;base64,", "");
			fileName += ".jpeg";
		} else if (base64Str.indexOf("data:image/jpg;") != -1) {
			base64Str = base64Str.replace("data:image/jpg;base64,", "");
			fileName += ".jpg";
		}

		File file = new File(path, fileName);
		byte[] fileBytes = Base64.getDecoder().decode(base64Str);
		try {
			FileUtils.writeByteArrayToFile(file, fileBytes);
		} catch (IOException e) {
			e.printStackTrace();

		}
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/images/").path(fileName)
				.toUriString();
		return fileDownloadUri;
	}
}
