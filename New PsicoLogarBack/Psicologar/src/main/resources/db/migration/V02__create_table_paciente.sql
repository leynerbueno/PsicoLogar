create table paciente (
id int primary key auto_increment,
foto varchar(100),
nome varchar(100) not null,
data_de_nascimento date not null,
genero varchar(100) not null,
email varchar(100) not null,
senha varchar(100) not null,
endereco varchar(100) not null,
dia_da_consulta varchar(50) not null,
psicologo_id int,
constraint FK_paciente Foreign key(psicologo_id) references psicologo(id)
);

INSERT INTO `psicologar`.`paciente` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `dia_da_consulta`, `psicologo_id`) VALUES ('Ricardo', '2010-05-20', 'Masculino', 'ricardo@ricardo.com', '$2a$10$HTXAVwq/KdefOD3nbedyBuEYY3o8QcBQQjM6MAY/9ZdgYFlRz79WW', 'rua teste 04', 'segunda-feira', '4');
INSERT INTO `psicologar`.`paciente` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `dia_da_consulta`, `psicologo_id`) VALUES ('Michele', '2000-01-20', 'Femenino', 'michele@michele.com', '$2a$10$HTXAVwq/KdefOD3nbedyBuEYY3o8QcBQQjM6MAY/9ZdgYFlRz79WW', 'rua teste 05', 'terça-feira', '4');
INSERT INTO `psicologar`.`paciente` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `dia_da_consulta`, `psicologo_id`) VALUES ('Fernanda', '1999-05-10', 'Femenino', 'fernanda@fernanda.com', '$2a$10$HTXAVwq/KdefOD3nbedyBuEYY3o8QcBQQjM6MAY/9ZdgYFlRz79WW', 'rua teste', 'quarta-feira', '4');
INSERT INTO `psicologar`.`paciente` (`nome`, `data_de_nascimento`, `genero`, `email`, `senha`, `endereco`, `dia_da_consulta`, `psicologo_id`) VALUES ('Admin Paciente', '1994-03-21', 'Masculino', 'adminpaciente@admin.com', '$2a$10$HTXAVwq/KdefOD3nbedyBuEYY3o8QcBQQjM6MAY/9ZdgYFlRz79WW', 'Rua teste 02','sexta-feira','4');