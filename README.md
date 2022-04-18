## Prueba Backend:
Presentado por: Diana Catalina Salazar Guevara
email: dianac.salazarg@gmail.com

## Estructura general:
Para la prueba Backend se utilizo node.js con el framework express y nodemon para ejecutar los cambios.
La API esta conectada a una base de datos de mysql creada de forma local.
La API esta en el puerto:9000  localhost:9000
El archivo principal se encuentra en la carpeta src, con Nombre: index.js
las rutas que permiten hacer las peticiones se enuentran en el archivo routes.js en la carpeta src.
El archivo request.http, es el que permite visualizar ejemplos de como realizar cada peticion a la base de datos. Para que este archivo sea efectivo, es necesario instalar una extension de visual estudio REST Client (la primera opcion). Esta extension permite hacer peticiones, sin necesidad de utilizar postman.
Nota: Para el correcto funcionamiento de el envio de peticiones se debe instalar la extension visual estudio REST Client y posterior a la instalación, dar click en la opción send Request que aparece sobre cada petición.

## Descargar el repositorio:

- Crear nueva carpeta en el escritorio
- Abrir la terminal de Git Bash 
- Iniciar nuevo repositorio local : git init 
- Escribir: git clone --branch master https://github.com/Di-cmd/Prueba-Backend-Parque-explora.git
- Una vez se descarga se abre el proyecto en el editor de codigo visual studio Code
- En una nueva terminal escribir: npm i
- Una vez finaliza, instalar la extension REST Client
- Ejecutar el proyecto con el comando: npm run dev
- El proyecto se ejecuta en el puerto: 9000.



## Para poder conectar con base de datos:
- Al no tener un hosting o una herramienta para subirla a la red es necesario instalar la base de datos de forma local.

- Se implemento el siguiente block que informa como hacer la instalación: 
https://codigosql.top/mysql/instalar-mysql-server-y-mysql-workbench-en-windows-10/

- tambien se utilizo el siguiente video en youtube para la instalación:
https://www.youtube.com/watch?v=FQ7XAygh0qA&ab_channel=FranklinGarc%C3%ADa

- Se anexa el link directo para la descarga de la base de datos:
https://dev.mysql.com/downloads/mysql/

Pasos para instalar: 
se da click en la imagen 
se instala la version compatible con el equipo.
- se da click en la parte inferior de la vista en:  No thanks, just start my download;
- Es necesario instalar los productos de mYSQL server y mySQL Workbench. (para la correcta ejecucion de la base de datos)
- No agregar un usuario, se dejo por defecto el usuario root.
- Es necesario que la contraseña creada sea:  123456    (para que sea compatible con el backend, sino no podra conectar)

Para la creacion de la base de datos y la tabla correspondiente ejecutar los siguientes comandos y correrlos. (icono de rayo)

create database explora; 
use explora;
create table experiencia (
id int not null auto_increment,
titulo varchar(45) not null ,
descripcion varchar(100) not null,
sala varchar (100) not null,
destacada varchar(45) not null,
imagen varchar(100) not null,
primary key(id)
)engine=InnoDB;


- Una vez se crea la base de datos y la tabla, se da click en el icono de refrescar y se muestran en el mySQL workbench. Ya esta lista para poder enviarle datos por medio del backend. 

- la base de datos inicialmente va a estar vacia, se puede llenar la informacion por medio del archivo request.http
implementando la peticion post: ya creada en el archivo. 
//Este permite crear nuevas experiencias
###
POST http://localhost:9000 HTTP/1.1
Content-Type: application/json

{
    "titulo":"Relatividad",
    "descripcion":"Un vistazo a las teorias de la fisica y la ciencia mas reconocidas",
    "sala":"ciencia",
    "destacada":"si es destacada",
    "imagen":" "
}

Para poder visualizar la experiencia creada en el puerto 9000, es necesario ejecutar la peticion GET, del mismo archivo. 

- Para ejecutar cada peticion se da click en la opcion send Request. que aparece sobre cada peticion, gracias a la extension REST Client. 



## Hacer peticiones:

- Visualizar el archivo request.http y los ejemplos presentados.
- Personalizar las peticiones, ejemplo: si es una peticion delete en la ruta presentada en el request.http modificar el id en la ruta, por el que se quiere eliminar.
- Dar click en la opción send Request que aparece sobre cada petición (esto lo permite la extension REST Client)

