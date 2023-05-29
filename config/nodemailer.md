Utilizamos la librería de Javascript nodemailer para poder enviar corres electrónicos desde nuestra aplicación. Por el momento solo está configurado para enviar correos para la verificación de Gmails.

Primero se crea en la carpeta 'config' el archivo 'nodemailer.js' y se importa nodemailer de 'nodemailer'.

Se crea una función asíncrona "createTransporter" a la cual se le pasa por parámetro un 'user', que es la información del usuario a registrarse.
Éste parámetro se le pasa directamente cuando se crea el nuevo usuario, en el controlador 'signUp.js', donde tiene información sobre el email a enviar el correo. Cabe destacar que en éste archivo debemos de importar a la función.

La función crea un mensaje transportador de un objeto a través del método 'nodemailer.createTransport', se especifica que es para Gmail, y se utilizan las variables de entorno EMAIL y EMAIL_PW que declararemos en el .env con la verificación de dos pasos de google:
    -Primero hay que crearse una cuenta de gmail, que es la que va a emitir los correos para que los usuarios puedan verificar en su email.
    -Luego, ir a 'GESTIONAR TU CUENTA DE GOOGLE'.
    -Una vez allí buscar la opción seguridad que se encuentra al lado izquierdo.
    -Ya en la parte de seguridad vas a buscar donde diga verificación de 2 pasos y la implementas.
    -Una vez que ya tengaan la verificación de 2 pasos, van a buscar la opción 'Contraseña de aplicacion' en el buscador de arriba.
    -Allí les van salir 2 opciones de unos desplegables de selección. En el primero escogen el tipo de aplición en este caso escogen 'otra' 
    -Después de seleccionar otra, les va a pedir el nombre de la app, y en este caso le ponemos 'adminAPI'. 
    -Luego le damos generar y te va a dar una contraseña para guardar.
    -Con esa contraseña van a ir a su .env donde están las variables de entorno y en EMAIL poner el email que se usó para las verificación de dos 2 pasos, y por último en EMAIL_PW ponen la contraseña que les dio google

El método transporter.sendMail sirve para para enviar un correo electrónico con desde "Minga" <mingasgml@gmail.com>, hacia el destinatario user.mail, con el asunto "Verifying mail" y el contenido HTML del correo de verificación.

Para la implementacion, como ya se dijo se hizo dentro del controlador de auth, en 'signUp.js' al momento de crear un usuario. Por ejemplo:

```js
import createTransporter from '../../config/nodemailer.js';

let create = async (req, res, next) => {
  req.body.role = 0;
  req.body.is_online = false;
  req.body.is_verified = false;
  req.body.verify_code = crypto.randomBytes(10).toString("hex");
  req.body.password = bcryptjs.hashSync(req.body.password, 10);
  try {
    let one = new User(req.body);
    createTransporter(one)
      .then(info => console.log(info))
      .catch(error => console.log(error))
    await one.save();
    return res.status(201).json({
      message: "user created!",
      user: one.email,
      success: true,
      timestamps: one.createdAt,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
```
