CREATE TABLE `diario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emocao1` int DEFAULT NULL,
  `emocao2` int DEFAULT NULL,
  `emocao3` int DEFAULT NULL,
  `emocao4` int DEFAULT NULL,
  `emocao5` int DEFAULT NULL,
  `emocao_geral` int DEFAULT NULL,
  `comentario_paciente` varchar(150) NOT NULL,
  `comentario_psicologo` varchar(150) NOT NULL,
  `data_do_diario`  TIMESTAMP DEFAULT NOW(),
  `detalhes` varchar(150) NOT NULL,
  `paciente_id` int DEFAULT NULL,
   	PRIMARY KEY (`id`),
  CONSTRAINT `fk_paciente` FOREIGN KEY (`paciente_id`) REFERENCES `paciente` (`id`)
 );
 
 INSERT INTO diario VALUES (
	NULL, 5, 9, 8, 7, 2, 4, "hoje me senti legal", "hoje ele tava estranho", "2019-10-10" , "esse paciente é estranho", 1),
	(NULL, 5, 9, 8, 7, 2, 4, "hoje me senti legal", "hoje ele tava estranho", "2019-10-10", "esse paciente é estranho", 1),
	(NULL, 5, 9, 8, 7, 2, 4, "hoje me senti legal", "hoje ele tava estranho", "2019-10-10", "esse paciente é estranho", 2),
	(NULL, 5, 9, 8, 7, 2, 4, "hoje me senti legal", "hoje ele tava estranho", "2019-10-10", "esse paciente é estranho", 3);