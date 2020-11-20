create table psicologo (
id int primary key auto_increment,
foto varchar(100),
nome varchar(100) not null,
data_de_nascimento date not null,
genero varchar(100) not null,
email varchar(100) not null,
senha varchar(100) not null,
endereco varchar(100) not null,
crp varchar(50) not null
);

INSERT INTO `psicologar`.`psicologo` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `crp`) VALUES ('Andre', '1990-05-20', 'Masculino', 'andre@andre.com', '123', 'Rua teste 012', '01478520');
INSERT INTO `psicologar`.`psicologo` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `crp`) VALUES ('Leyner', '1998-09-10', 'Masculino', 'leyner@leyner.com', '123', 'Rua teste 03', '9632147850');
INSERT INTO `psicologar`.`psicologo` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `crp`) VALUES ('Juan', '1994-03-21', 'Masculino', 'juan@juan.com', '123', 'Rua teste 02', '8520147');
INSERT INTO `psicologar`.`psicologo` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `crp`) VALUES ('Admin', '1994-03-21', 'Masculino', 'admin@admn.com', '$2a$10$ABc5yVx.AwfDVK9QHJ7so.aiTTFSFy/sEmmpTHn.ohoVkKwWnguUu', 'Rua teste 02', 'admin');
