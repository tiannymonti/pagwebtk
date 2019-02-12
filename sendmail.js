const nodemailer = require('nodemailer');

async function receiving(pars){
    let txtBody = `Empresa: ${pars.empresa }.\n Nombre: ${pars.nombre}.\n Teléfono: ${pars.celular}.\n Correo: ${pars.email}.\n Comentarios: ${pars.comentarios}.\n`;
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'tatiana.barrios.montenegro@gmail.com',
               pass: 'Am950107!11216'
           }
    });

    const mailOptions = {
        from: 'contacto@takcolombia.com', // sender address
        to: "tiannymonti@gmail.com", // list of receivers
        subject: 'Contacto', // Subject line
        html: `<p>${txtBody}</p>` // html body
    };

    const info = await transporter.sendMail(mailOptions)

    console.log('info in', txtBody);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = {receiving};