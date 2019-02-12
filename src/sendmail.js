require('../config/config');

const nodemailer = require('nodemailer');

async function receiving(pars){
    const txtBody = `Empresa: ${pars.empresa }.\n Nombre: ${pars.nombre}.\n Teléfono: ${pars.celular}.\n Correo: ${pars.email}.\n Comentarios: ${pars.comentarios}.\n`;
    
    const transporter = nodemailer.createTransport({
        service: process.env.ESERVER,
        auth: {
               user: process.env.EUSER,
               pass: process.env.EPASS
        }
    });

    const mailOptions = {
        from: 'contacto@takcolombia.com', // sender address
        to: process.env.EMAILTO, // list of receivers
        subject: 'Contacto', // Subject line
        html: `<p>${txtBody}</p>` // html body
    };

    const info = await transporter.sendMail(mailOptions)

    console.log('info in', txtBody);
    console.log("Message sent: %s", info.messageId);
}

module.exports = {receiving};