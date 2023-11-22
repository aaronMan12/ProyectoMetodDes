create database TiendaAbarrotes;
use TiendaAbarrotes;

CREATE USER 'prueba'@'localhost' IDENTIFIED BY 'prueba123';
GRANT ALL PRIVILEGES ON TiendaAbarrotes.* TO 'prueba'@'localhost';
FLUSH PRIVILEGES;


select * from usuario where correo= "" and password="";
select * from usuario where correo= 'eje@eje.com' and password='123';

DELETE FROM producto WHERE idProducto = 3;

insert into usuario (nombre, password, correo ) values ("nombre", 123, "eje@eje.com") ;

create table usuario(
idUsuario int auto_increment not null primary key,
nombre varchar (30) not null,
password varchar (8) not null,
correo varchar (30) not null
);

create table producto(
idProducto int auto_increment not null primary key,
nombre varchar(50) not null,
precio float not null,
fotografia varchar(100)
);

insert into producto (nombre, precio, fotografia) values ('Jabon', 22,
 'https://cleansy.mx/wp-content/uploads/2021/08/My-project-5-compressed-11.jpg');
 
 insert into producto (nombre, precio, fotografia) values ('Axión 1LT', 54,
 'https://www.surtilag.com/cdn/shop/products/axion_600x.jpg?v=1660148275');
 

 delete from producto where idProducto=6;
 
insert into producto (nombre, precio, fotografia) values ('Cepillo dental colgate', 25,
 'https://chedrauimx.vtexassets.com/arquivos/ids/21667604/7509546667737_01.jpg?v=638346430629100000');
 

 
 update producto set nombre="Jabonn", precio=2, fotografia=""  where idProducto=1;