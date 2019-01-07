//requireds
const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('==================='.green);


    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);

    }
}



//otra forma:
//module.exports.crearArchivo --->
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        //1er paramatro es el archivo a grabar
        //2do es el contenido a grabar
        //3ro callback
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    })
}

//es mejor esta forma porque se puede agregar mas propiedad: funcion
module.exports = {
    crearArchivo,
    listarTabla
}