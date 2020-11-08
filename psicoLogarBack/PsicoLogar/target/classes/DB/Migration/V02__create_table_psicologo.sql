CREATE TABLE `psicologo` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
   `usuario_id` INT NOT NULL,
  `crp` varchar(150) NOT NULL
  
);

INSERT INTO psicologo VALUES 
    (NULL, 1, "987654123"),
	(NULL, 2,"987654123"),
	(NULL, 3,"987654123");