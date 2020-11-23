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

INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '2', '29', 'teste apenas', '2020-08-01', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `data_do_diario`, `paciente_id`) VALUES ('5', '5', '5', '5', '5', '25', 'teste apenas', '2020-08-01', '4');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '3', '30', 'teste apenas', '2020-08-02', '4');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '3', '30', 'teste apenas', '2020-08-03', '4');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '3', '30', 'teste apenas', '2020-08-04', '4');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '3', '30', 'teste apenas', '2020-08-05', '4');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '4', '31', 'teste apenas', '2020-07-01', '2');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `data_do_diario`, `paciente_id`) VALUES ('8', '2', '6', '7', '5', '27', 'teste apenas', '2020-06-01', '2');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `data_do_diario`, `paciente_id`) VALUES ('10', '10', '10', '10', '10', '50', 'teste apenas', '2020-08-15', '3');