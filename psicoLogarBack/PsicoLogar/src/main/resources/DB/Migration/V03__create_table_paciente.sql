CREATE TABLE `paciente` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `consulta` varchar(150) NULL,
  `usuario_id` INT NOT NULL
);

INSERT INTO paciente VALUES 
    (NULL,"4ª feira",4),
	(NULL,"5ª feira",5),
	(NULL,"2ª feira",6),
	(NULL,"6ª feira",7);