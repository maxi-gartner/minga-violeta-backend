import nodemailer from 'nodemailer'

async function createTransporter(user) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PW
        },
    })
// linea 27, cambiar por el link del backend hosteado
    const message = await transporter.sendMail({
        from: ' "Minga" <mingasgml@gmail.com>',
        to: user.email,
        subject: "Verifying mail",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333333;">Verificación de Correo Electrónico</h1>
            <p style="color: #666666;">¡Hola!</p>
            <p style="color: #666666;">Por favor, haz clic en el siguiente enlace para verificar tu correo electrónico:</p>
            <div style="display: flex; justify-content: center; text-align: center; margin-bottom: 20px;">
                <a href='http://localhost:8000/auth/verify/?verify_code=${user.verify_code}' style="display: inline-block; padding: 12px 24px; background-image: linear-gradient(to right, #F9A8D4, #F472B6); color: #ffffff; text-decoration: none; border-radius: 4px;">Verificar Correo Electrónico</a>
            </div>
            <p style="color: #666666;">Gracias por tu registro.</p>
        </div>
        `
    });
}

export default createTransporter