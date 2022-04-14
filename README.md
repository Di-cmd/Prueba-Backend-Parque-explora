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


## Hacer peticiones:

- Visualizar el archivo request.http y los ejemplos presentados.
- Personalizar las peticiones, ejemplo: si es una peticion delete en la ruta presentada en el request.http modificar el id en la ruta, por el que se quiere eliminar.
- Dar click en la opción send Request que aparece sobre cada petición (esto lo permite la extension REST Client)

