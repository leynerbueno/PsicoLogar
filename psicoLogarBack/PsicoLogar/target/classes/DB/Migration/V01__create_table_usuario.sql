CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	foto VARCHAR(200) NULL,
	nome VARCHAR(150) NOT NULL,
	email VARCHAR(150) NOT NULL UNIQUE,
	senha VARCHAR(150) NOT NULL,
	genero VARCHAR(100) NOT NULL,
	telefone VARCHAR(50) NOT NULL,
	data_nascimento VARCHAR(15) NOT NULL,
	endereco VARCHAR(200) NOT NULL,
	tipoUsuario VARCHAR(10)  
);

/*Inserts de Psicologos*/
INSERT INTO usuario VALUES 
    (NULL,NULL, "André", "andre.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "Masculino", "5555-6666", "1990/01/01", "Rua aleatoria, 888","Psicologo"),
	(NULL,NULL, "Juan", "juan.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "Masculino", "5555-6666", "1990/01/01", "Rua aleatoria, 888","Psicologo"),
	(NULL,NULL, "Leyner", "leyner.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "Masculino", "5555-6666", "1990/01/01", "Rua aleatoria, 888","Psicologo");
	
/*Inserts de Pacientes*/
INSERT INTO usuario VALUES 
    (NULL,NULL, "Joana", "joana.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "Masculino", "5555-6666", "1990/01/01", "Rua aleatoria, 888","Paciente"),
	(NULL,NULL, "Thais", "thais.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "Masculino", "5555-6666", "1990/01/01", "Rua aleatoria, 888","Paciente"),
	(NULL,NULL, "Mariana","mariana.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "Masculino", "5555-6666", "1990/01/01", "Rua aleatoria, 888","Paciente"),
	(NULL,NULL, "Juliana", "juliana.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "Masculino", "5555-6666", "1990/01/01", "Rua aleatoria, 888","Paciente");