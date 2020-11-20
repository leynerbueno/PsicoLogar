create table paciente (
id int primary key auto_increment,
foto varchar(100),
nome varchar(100) not null,
data_de_nascimento date not null,
genero varchar(100) not null,
email varchar(100) not null,
senha varchar(100) not null,
endereco varchar(100) not null,
data_da_consulta date not null,
psicologo_id int,
constraint FK_paciente Foreign key(psicologo_id) references psicologo(id)
);

INSERT INTO `psicologar`.`paciente` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `data_da_consulta`, `psicologo_id`) VALUES ('Ricardo', '2010-05-20', 'Masculino', 'ricardo@ricardo.com', '123', 'rua teste 04', '2020-08-10', '1');
INSERT INTO `psicologar`.`paciente` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `data_da_consulta`, `psicologo_id`) VALUES ('Michele', '2000-01-20', 'Femenino', 'michele@michele.com', '123', 'rua teste 05', '2020-09-01', '2');
INSERT INTO `psicologar`.`paciente` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `data_da_consulta`, `psicologo_id`) VALUES ('Fernanda', '1999-05-10', 'Femenino', 'fernanda@fernanda.com', '123', 'rua teste', '2020-06-13', '3');