CREATE TABLE `paciente` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `consulta` varchar(150) NULL,
  `usuario_id` INT NOT NULL,
  `psicologo_id` INT NULL
);

INSERT INTO paciente VALUES 
    (NULL,"4ª feira",4, NULL),
	(NULL,"5ª feira",5, 1),
	(NULL,"2ª feira",6, 2),
	(NULL,"6ª feira",7, 3);