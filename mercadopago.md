# Documentacion para la implementacion de Checkout Pro de Mercardo Pago
Implementamos la solución Checkout Pro de mercadopago para que los desarrolladores de la app de Minga puedan recibir donaciones de $1000, $5000 o $10000 pesos argentinos. La implementación fue realizada con el entorno de prueba que ofrece mercado pago.

# Sobre Checkout Pro
Checkout Pro es una solución que permite a los clientes realizar compras a través de las páginas de pago de Mercado Pago de forma segura, rápida y con la posibilidad de pagar con los principales medios de pago disponibles actualmente.

# Preferencias de pago de Mercado pago
Las preferencias son conjuntos de información que te permiten configurar un producto o servicio que deseas cobrar, como el precio y la cantidad, así como otras configuraciones relacionadas con el flujo de pago definido.

# Requisitos previos
 - Para integrar Checkout Pro, necesitas una cuenta de vendedor en Mercado Pago.
 - Necesitarás un par de credenciales de prueba para probar la integración y un par de credenciales de producción para recibir pagos reales. 

# Instalación
Importar la biblioteca mercadopago con el siguiente comando para node:
```
npm install mercadopago

```
# Token
Se debera crear un usuario de prueba para obtener el token de acceso que nos permitira vincular correctamente la api. En nuestro archivo .env añadimos la variable de entorno ACCESS_TOKEN para configurar nuestro controlador create de la siguiente manera: 
```js
mercadopago.configure({ access_token: process.env.ACCESS_TOKEN})
```

# Controlador create
El controlador create acepta una solicitud (req) y una respuesta (res). 
Dentro del controlador, se obtiene el cuerpo de la solicitud (req.body) que contiene los datos necesarios para crear la preferencia de pago.

```js
let data = req.body;
```

Luego se crea un objeto preference que define los detalles del artículo a pagar, las URL de redireccionamiento y otras configuraciones relacionadas con el checkout. Este objeto se configura según los datos recibidos en la solicitud.

```js
let preference = {
            items: [
                {
                    id: data.id,
                    title: data.title,
                    currency_id: "ARS",
                    unit_price: data.unit_price,
                    quantity: 1,
                } 
            ],
            back_urls: {
                success: "http://localhost:5173/donate/success",
                failure: "http://localhost:5173/donate/failed",
                pending: "",
            },
            auto_return: "approved",
            binary_mode: true,
            statement_descriptor: "MINGA",
        };
```

Se utiliza el método create de mercadopago.preferences para crear la preferencia de pago en Mercado Pago. La respuesta exitosa se envía como una respuesta JSON con el código de estado 200 "OK", mientras que cualquier error se captura y se envía como una respuesta JSON con el código de estado 400 "bad request".

```js
mercadopago.preferences
            .create(preference)
            .then((response) => res.status(200).json({ response }))
            .catch((error) => res.status(400).json({ error: error.message }));
```
# Enrutamiento
Creamos un archivo de ruta llamado donations.js para nuestra petición de tipo POST dentro de la carpeta routes donde importamos express, el middleware de passport para validar si el token del usuario esta autorizado y el controlador create.

Por ultimo, importamos "donations.js" en el archivo de ruta index.js y añadimos el endpoint "/donate" con su respectiva ruta de acceso.

# Nota
Para realizar y chequear el correcto funcionamiento de los flujos de compras es necesario que tanto el vendedor como el comprador sean usuarios de prueba.

