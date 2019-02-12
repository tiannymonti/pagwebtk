const fs = require("fs");

function writeLogs(bd){
    const timeStmp = new Date().toLocaleDateString();
    const txtBody = `Empresa: ${bd.empresa }.\n Nombre: ${bd.nombre}.\n Teléfono: ${bd.celular}.\n Correo: ${bd.email}.\n Comentarios: ${bd.comentarios}.\n`;
    fs.writeFile(`./logcontactos/contacto-${timeStmp}.txt`, txtBody, (err) => { 
        if (err) throw err;
    });
}

module.exports = {writeLogs};
