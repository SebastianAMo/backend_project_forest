# LISTA

- [ ] Ticket 1
- [ ] Ticket 2
- [ ] Ticket 3
- [ ] Ticket 4
- [ ] Ticket 5
- [ ] Ticket 6
- [ ] Ticket 7
- [ ] Ticket 8
- [ ] Ticket 9
- [ ] Ticket 10
- [ ] Ticket 11
- [ ] Ticket 12
- [ ] Ticket 13
- [ ] Ticket 14

## TICKET: TITULO

### Problema

Descripcion

| Caracteristica  | Datos          |
| --------------- | -------------- |
| Tiempo estimado | x hora         |
| Lenguaje        | Java Script    |
| OS              | windows 10 x64 |
| Tipo de tarea   | Desarrollo     |

## LISTA resumen

1. Iniciar el proyecto usando npm, instalar dependecias (express, dotenv, cors) dependencias dev (morgan nodemon)

2. Crear .env.example con PORT, DATA_PATH y NAME_FILE(nombre del archivo que va contener el estatus del juego)

3. Crear archivo config.sh que cree la carpeta current_status, el archivo .env y que paso el contenido de .env.example al .env  .Crear .gitignore agregar carpeta node_modules, .env y current_status

4. Crear carpeta config y dentro crear el archivo config.js, el archivo usando dotenv en un objecto llamado config debe extraer la información del .env el cual debe tener una opcion por defecto y el objeto config se debe poder importarñ

5. Si no existe el archivo index.js crearlo y agregar lo necesario para el servidor funcione usando express, cors y poner a escuchar el servidor en el puerto que especifica en config.js el cual se debe importar

6. Crear carpeta router y archivos index.js y movement.router.js, jump.router.js, attack.router.js y idle.router.js

7. Crear todos los endpoints que estan en el README.md y que solo devuelvan un mensaje que describa el endpoint

8. Crear todos los endpoints en POSTMAN y revisar el mensaje

9. Crear carpeta service y game.service.js y file.service.js

10. Crear constructor para dataPath y metodos necesarios para crear, leer y eleminar un archivo en file.service.js, los nombres deben ser los siguiente createFile, readFile y deleteFile. Los archivos createFile, readFile deben ser asincronos y el deleteFile no. todos reciben el nombre del archivo y createFile envia los datos que se guardaran en el archivo

11. Conectar los metodos de crear, leer y eliminar un archivo en game.service con los siguientes nombres startGame, getGameStatus, deleteGameStatus y usarlos a los endpoint de idle.router correspondientes, en el startGame el dato que se envia es la estructura en el README.md y hacer pruebas correspondientes.

12. Crear en el file.service un metodo (updateFile) para actualizar un archivo de forma asincrona y usarlo en game.service en el metodo updateGameStatus tambien de forma asincrona

13. Completar los endpoint de movement.router con el metodo de updateGameStatus los movimientos como up y right aumentan en 10 en sus ejes correspondientes, down y left disminuyen en 10. Se debe obtener el estatus actual y actualizarlo a partir de ese

14. Completar los endpoint de jump.router estos deben hacer que si se salta a la derecha el valor de "x" y "y" deben ser 10, para salto a la izquierda el valor de "x" deber ser -10 y "y" 10,en los dos casos jumping debe ser "true"

15. Completar los endpoint de attack.router estos deben hacer que ataque a la derecha poniendo attacking en 10 y a la izquierda en -10
