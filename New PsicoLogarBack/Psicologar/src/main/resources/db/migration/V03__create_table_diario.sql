create table diario (
id int primary key auto_increment,
emocao1 int not null,
emocao2 int not null,
emocao3 int not null,
emocao4 int not null,
emocao5 int not null,
emocao_geral int not null,
diario_paciente longtext not null,
comentario_psicologo longtext null,
detalhes longtext null,
data_do_diario date not null,
paciente_id int,
constraint FK_diario Foreign key(paciente_id) references paciente(id)
);