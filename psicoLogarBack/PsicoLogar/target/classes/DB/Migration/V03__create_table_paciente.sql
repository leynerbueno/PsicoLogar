CREATE TABLE `paciente` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `consulta` varchar(150) NULL,
  `usuario_id` INT NOT NULL,
  psicologo_id int 
);

INSERT INTO paciente VALUES 
    (NULL,"segunda-feira",4,1),
	(NULL,"quinta-feira",5,null),
	(NULL,"segunda-feira",6,2),
	(NULL,"sexta-feira",7,3);
