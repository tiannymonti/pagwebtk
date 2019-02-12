const nodemailer = require('nodemailer');

const receiving = function(pars){
    let txtBody = `Empresa: ${pars.empresa }.\n Nombre: ${pars.nombre}.\n Teléfono: ${pars.celular}.\n Correo: ${pars.email}.\n Comentarios: ${pars.comentarios}.\n`;
                            
    console.log('info in', txtBody);
    return [200,4];
}

module.exports = {receiving};