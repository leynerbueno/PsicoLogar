create table diario (
id int primary key auto_increment,
emocao1 int ,
emocao2 int ,
emocao3 int,
emocao4 int ,
emocao5 int ,
emocao_geral int ,
diario_paciente longtext not null,
comentario_psicologo longtext null,
detalhes longtext null,
data_do_diario date not null,
paciente_id int,
constraint FK_diario Foreign key(paciente_id) references paciente(id)
);

INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('100', '50', '100', '70', '25', '445',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-14', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('10', '10', '10', '10', '10', '50',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-15', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('10', '10', '10', '10', '10', '50',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-26', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('10', '7', '6', '5', '2', '29', 'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-17', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('100', '5', '100', '100', '5', '310', 'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-18', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '3', '30',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-19', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '3', '30',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-20', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '3', '30',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-21', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '3', '30',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-22', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('6', '7', '9', '5', '4', '31',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-23', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('8', '2', '6', '7', '5', '27',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-24', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('10', '10', '10', '10', '10', '50',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-25', '1');
INSERT INTO `psicologar`.`diario` (`emocao1`, `emocao2`, `emocao3`, `emocao4`, `emocao5`, `emocao_geral`, `diario_paciente`, `comentario_psicologo`, `detalhes`, `data_do_diario`, `paciente_id`) VALUES ('10', '10', '10', '10', '10', '50',  'Hoje eu me senti muito bem, sai para correr!','O paciente se sentiu bem com o novo tratamento','O paciente reage bem a novas experiencias', '2020-11-26', '1');