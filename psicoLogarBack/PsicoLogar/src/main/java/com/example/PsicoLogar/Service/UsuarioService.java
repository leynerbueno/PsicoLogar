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

import com.example.PsicoLogar.Entity.Psicologo;
import com.example.PsicoLogar.Entity.Usuario;
import com.example.PsicoLogar.Repository.PsicologoRepository;
import com.example.PsicoLogar.Repository.UsuarioRepository;
import com.example.PsicoLogar.Resource.BaseService;

@Service
public class UsuarioService extends BaseService<Usuario, UsuarioRepository> {

	@Autowired
	private UsuarioRepository usuarioRepository;
	@Autowired
	private PsicologoService psicologoService;
	@Autowired
	private PsicologoRepository psicologoRepository;

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

		Psicologo psicologo = new Psicologo();
		Long usuarioId = entity.getId();
		psicologo.setUsuarioId(usuarioId);
		this.psicologoService.insert(psicologo);
		return entity;
	}

	@Override
	public Usuario update(Long id, Usuario entity) {
		if (entity.getFoto() != null && !entity.getFoto().startsWith("http")) {
			String urlDaImagem = saveBase64(entity.getFoto());
			entity.setFoto(urlDaImagem);
		}
		entity.setId(id);
		//super.insert(entity);
		System.out.println("Entrou");
		Psicologo psicologo = new Psicologo();
		psicologo.setCrp(entity.getPsicologo().getCrp());
		//System.out.println(psicologo.getId());
		Psicologo psicologoAux = this.psicologoRepository.findByUsuarioId(id);
		psicologo.setId(psicologoAux.getId());
		Long usuarioId = entity.getId();
		psicologo.setUsuarioId(usuarioId);
		this.psicologoService.insert(psicologo);
		entity.setPsicologo(null);
		this.usuarioRepository.save(entity);
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
