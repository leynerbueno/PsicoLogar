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

import com.projetoIntegrador.Psicologar.Entity.Paciente;
import com.projetoIntegrador.Psicologar.Entity.Usuario;
import com.projetoIntegrador.Psicologar.Repository.PacienteRepository;
import com.projetoIntegrador.Psicologar.Resource.BaseService;
import com.projetoIntegrador.Psicologar.util.Mail;

@Service
public class PacienteService extends BaseService<Paciente, PacienteRepository> {

	@Autowired
	private PacienteRepository pacienteRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private EmailService emailService;

	public Usuario getUser() {
		User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Optional<Paciente> optional = pacienteRepository.findByEmail(user.getUsername());

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

	// metodo para cadastrar/atualizar pacientes com a foto
	@Override
	public Paciente insert(Paciente entity) {
		if (entity.getFoto() != null && !entity.getFoto().startsWith("http")) {
			String urlDaImagem = saveBase64(entity.getFoto());
			entity.setFoto(urlDaImagem);
		}
		return super.insert(entity);
	}

	public Paciente registro(Paciente pacienteDto) {
		Optional<Paciente> emailExistente = pacienteRepository.findByEmail(pacienteDto.getEmail());
		if (emailExistente.isPresent()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email já existe!");
		}

		pacienteDto.setTokenConfirmation(UUID.randomUUID().toString());
		Paciente paciente = this.insert(pacienteDto);

		Mail mail = new Mail();
		mail.setTo(paciente.getEmail());
		mail.setSubject("Confirmação de cadastro");
		mail.setTemplate("welcome");
		//mail.setTemplate("confirm-register-email");

		Map<String, Object> model = new HashMap<>();
		model.put("usuario", paciente);
		model.put("token", "confirm-register?token=" + paciente.getTokenConfirmation());

		mail.setModel(model);
		emailService.sendEmail(mail);

		return paciente;
	}
}
