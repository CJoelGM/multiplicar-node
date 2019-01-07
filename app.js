// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Crea el archivo de la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
//command(el comando en si, lo q se mostrara al usuario, objeto que
//recibira la configuracion de parametro que ese comando puede recibir)
//requireds
//const fs = require('fs'); //propio del node, solo se define y nada mas
//const fs = require('express'); // paquete q se instala, no existe en node
//const fs = require('./fs'); //archivos q nosotros creamos en el project
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//let base = '4';
// console.log(process.argv);
//console.log(multiplicar);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}



//console.log(argv);

//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Limite ', argv.limite);


//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);

//console.log(module); -> el module es un objeto global q esta
//disponible a lo largo de toda la app
/* let data = '';
for (let i = 1; i <= 10; i++) {

    data += `${base} * ${i} = ${base * i}\n`;

}

//1er paramatro es el archivo a grabar
//2do es el contenido a grabar
//3ro callback
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
}); */

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));