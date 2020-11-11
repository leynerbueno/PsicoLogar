CREATE TABLE `paciente` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `consulta` varchar(150) NOT NULL,
  `psicologo_id` int,
  CONSTRAINT `fk_psicologo` FOREIGN KEY (`psicologo_id`) REFERENCES `psicologo` (`id`)
);

INSERT INTO paciente VALUES 
    (NULL, 4, "4ª feira", 1),
	(NULL, 5, "5ª feira", 1),
	(NULL, 6, "2ª feira", 2),
	(NULL, 7, "6ª feira", 3);