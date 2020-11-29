create table psicologo (
id int primary key auto_increment,
foto varchar(100),
nome varchar(100) not null,
data_de_nascimento date not null,
telefone varchar(50) not null,
genero varchar(100) not null,
email varchar(100) not null,
senha varchar(100) not null,
endereco varchar(100) not null,
token_confirmation VARCHAR(191) NULL,
crp varchar(50) not null
);

INSERT INTO `psicologar`.`psicologo` (`foto`,`nome`, `data_de_nascimento`,`telefone`, `genero`, `email`, `senha`, `endereco`, `crp`) VALUES ('http://localhost:8080/images/187990a5b57e4c9ea818d42ec4010f30.jpeg','Admin Psicologo', '1994-03-21','956874598', 'Feminino', 'admin@admin.com', '$2a$10$HTXAVwq/KdefOD3nbedyBuEYY3o8QcBQQjM6MAY/9ZdgYFlRz79WW', 'Rua teste 02', 'admin');
INSERT INTO `psicologar`.`psicologo` (`foto`,`nome`, `data_de_nascimento`,`telefone`, `genero`, `email`, `senha`, `endereco`, `crp`) VALUES ('http://localhost:8080/images/812605c2d5734729b46615f3b09c6fd1.jpeg','Andre Chimicatti', '1990-05-20','956744598',  'Masculino', 'andre@gmail.com', '$2a$10$HTXAVwq/KdefOD3nbedyBuEYY3o8QcBQQjM6MAY/9ZdgYFlRz79WW', 'Rua teste 012', '01478520');
INSERT INTO `psicologar`.`psicologo` (`foto`,`nome`, `data_de_nascimento`,`telefone`, `genero`, `email`, `senha`, `endereco`, `crp`) VALUES ('http://localhost:8080/images/7836da04b4e049dfb402183ea1a39786.png','Leyner Bueno', '1997-06-01','923674598',  'Masculino', 'leyner@gmail.com', '$2a$10$HTXAVwq/KdefOD3nbedyBuEYY3o8QcBQQjM6MAY/9ZdgYFlRz79WW', 'Rua teste 03', '9632147850');
INSERT INTO `psicologar`.`psicologo` (`foto`,`nome`, `data_de_nascimento`,`telefone`, `genero`, `email`, `senha`, `endereco`, `crp`) VALUES ('http://localhost:8080/images/ae5cdc0f94e34e0aa2a9ad59b8434a67.jpeg','Juan Barcelos', '1994-03-21','956987598',  'Masculino', 'juan@gmail.com', '$2a$10$HTXAVwq/KdefOD3nbedyBuEYY3o8QcBQQjM6MAY/9ZdgYFlRz79WW', 'Rua teste 02', '8520147');
