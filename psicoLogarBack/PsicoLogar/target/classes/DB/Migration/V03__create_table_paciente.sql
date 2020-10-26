CREATE TABLE `paciente` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `consulta` varchar(150) NOT NULL,
  `usuario_id` INT NOT NULL,
  `psicologo_id` int
);

INSERT INTO paciente VALUES 
    (NULL, 4, "4ª feira", 1),
	(NULL, 5, "5ª feira", 1),
	(NULL, 6, "2ª feira", 2),
	(NULL, 7, "6ª feira", 3);