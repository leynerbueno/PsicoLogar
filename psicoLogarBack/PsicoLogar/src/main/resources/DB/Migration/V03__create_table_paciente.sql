CREATE TABLE `paciente` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `consulta` varchar(150) NOT NULL,
  `usuario_id` INT NOT NULL,
  `psicologo_id` int
);

INSERT INTO paciente VALUES 
    (NULL,"4ª feira",4, 1),
	(NULL,"5ª feira",5, 1),
	(NULL,"2ª feira",6, 2),
	(NULL,"6ª feira",7, 3);