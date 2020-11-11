CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	foto VARCHAR(200) NULL,
	nome VARCHAR(150) NULL,
	email VARCHAR(150) NOT NULL UNIQUE,
	senha VARCHAR(150) NOT NULL,
	genero VARCHAR(100) NOT NULL,
	telefone VARCHAR(50) NOT NULL,
	data_nascimento VARCHAR(15) NOT NULL,
	endereco VARCHAR(200) NOT NULL
);

/*Inserts de Psicologos*/
INSERT INTO usuario VALUES 
    (NULL,NULL, "André", "andre.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "masculino", "5555-6666", "01/01/1990", "Rua aleatoria, 888"),
	(NULL,NULL, "Juan", "juan.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "masculino", "5555-6666", "01/01/1990", "Rua aleatoria, 888"),
	(NULL,NULL, "Leyner", "leyner.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "masculino", "5555-6666", "01/01/1990", "Rua aleatoria, 888");
	

	
/*Inserts de Pacientes*/

INSERT INTO usuario VALUES 
    (NULL,NULL, "Joana", "joana.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "masculino", "5555-6666", "01/01/1990", "Rua aleatoria, 888"),
	(NULL,NULL, "Thais", "thais.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "masculino", "5555-6666", "01/01/1990", "Rua aleatoria, 888"),
	(NULL,NULL, "Mariana","mariana.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "masculino", "5555-6666", "01/01/1990", "Rua aleatoria, 888"),
	(NULL,NULL, "Juliana", "juliana.silva@gmail.com", "$2y$12$sSLCsH9Q.irGZhYl2zaQweO5wIhlExwiqZyerdmMSVzSRr.h0.zzS", "masculino", "5555-6666", "01/01/1990", "Rua aleatoria, 888");