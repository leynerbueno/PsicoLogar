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