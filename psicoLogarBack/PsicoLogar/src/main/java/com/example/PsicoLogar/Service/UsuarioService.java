package com.example.PsicoLogar.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.PsicoLogar.Entity.Usuario;
import com.example.PsicoLogar.Repository.UsuarioRepository;
import com.example.PsicoLogar.Resource.BaseService;

@Service
public class UsuarioService extends BaseService<Usuario, UsuarioRepository> {

	@Override
	public Usuario insert(Usuario entity) {
		String urlDaImagem = this.saveBase64(entity.getFoto());
		entity.setFoto(urlDaImagem);
		return super.insert(entity);
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
