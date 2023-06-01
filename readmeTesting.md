*Se creo el script para ejecutar los test
    Se ejecuta con el comando npm run test
    Se modifico el package.json instalando ""cross-env" para usar correctamente las variables de entorno
    en el arranque de mocha
    Se modifico app.js agregando un segundo parametro en logger para 
    evitar que morgan envie el mensaje de loggeado por cada interaccion de el test
*Se crea un test x cada recurso 
    auth => testing get read
    author => testing get read
    category => testing get read
    chapter => testing get read
    company => testing get read
    manga => testing post create and delete
*Para los testing de read se comprueba 
    statusCode === 200
    body contenga la propiedad success
    que la propiedad success sea true
    que contenga la propiedad correspondiente a la ruta del get con el array obtenido
    que el array obtenido su longitud sea mayor a 0
*Para el testing de Create and delete
    Create:
        statusCode === 201
        body contenga la propiedad id
        que el id obtenido su longitud sea mayor a 0
    Delete:
        statusCode === 200