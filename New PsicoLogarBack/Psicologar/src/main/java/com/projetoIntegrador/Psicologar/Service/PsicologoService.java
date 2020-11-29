package com.projetoIntegrador.Psicologar.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.projetoIntegrador.Psicologar.Service.EmailService;
import com.projetoIntegrador.Psicologar.util.Mail;
import com.projetoIntegrador.Psicologar.Entity.Psicologo;
import com.projetoIntegrador.Psicologar.Entity.Usuario;
import com.projetoIntegrador.Psicologar.Repository.PsicologoRepository;
import com.projetoIntegrador.Psicologar.Resource.BaseService;

@Service
public class PsicologoService extends BaseService<Psicologo, PsicologoRepository> {

	@Autowired
	private PsicologoRepository psicologoRepository;

	@Autowired
	private EmailService emailService;

	public Usuario getUser() {
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Optional<Psicologo> optional = psicologoRepository.findByEmail(user.getUsername());

		if (optional.isPresent()) {

			return optional.get();
		}

		return null;
	}

	// metodo para converter a imagem em base64.
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

	// metodo para cadastrar/atualizar psicologo com a foto
	@Override
	public Psicologo insert(Psicologo entity) {
		if (entity.getFoto() != null && !entity.getFoto().startsWith("http")) {
			String urlDaImagem = saveBase64(entity.getFoto());
			entity.setFoto(urlDaImagem);
		}
		return super.insert(entity);
	}
	
	public Psicologo registro(Psicologo psicologoDto) {
		Optional<Psicologo> emailExistente = psicologoRepository.findByEmail(psicologoDto.getEmail());
		if (emailExistente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email já existe!");
		}
		
		psicologoDto.setTokenConfirmation(UUID.randomUUID().toString());
		Psicologo psicologo = this.insert(psicologoDto);
		
		Mail mail = new Mail();
		mail.setTo(psicologo.getEmail());
		mail.setSubject("Confirmação de cadastro");
		mail.setTemplate("welcome");
		//mail.setTemplate("confirm-register-email");

		Map<String, Object> model = new HashMap<>();
		model.put("usuario", psicologo);
		model.put("token", "confirm-register?token=" + psicologo.getTokenConfirmation());

		mail.setModel(model);
		emailService.sendEmail(mail);
		
		return psicologo;
	}
}
