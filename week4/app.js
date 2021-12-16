// console.log(process.ENV); // Haalt info uit .env bestand
// console.log(process.env); // Info tonen over huidig node instantie/proces

process.env.USERNAME = 'test';

const { read } = require('fs');
// console.log(process.argv[2]);

// process.argv.forEach((arg, index) => {
//     const name = arg.split('=');
//     console.log(name[1]);
// });

const readlineModule = require('readline');

const interface = readlineModule.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// interface.question('Raad het woord: ', word => {
//     if (word === 'PGM') {
//         // console.log('Joepie');
//     }

//     interface.close();
// })


// const pathModule = require('path');

// const info = pathModule.parse('C:\\Program Files (x86)\\Adobe\\Adobe Creative Cloud\\pim.db');
// console.log(info);

const urlModule = require('url');

const url = urlModule.parse('https://studentarteveldehsbe.sharepoint.com/sites/mijndinar/');
const urlWithAPI = new URL('https://studentarteveldehsbe.sharepoint.com/sites/mijndinar/')
// console.log(urlWithAPI.searchParams.get());

const params = new URLSearchParams();

params.append('search', 'dit-is-mijn-zoekresultaat');


const system = require('os');

// console.log(system.cpus());

const filesystem = require('fs');

// filesystem.writeFile('./test.txt', 'test', () => {
//     console.log('File has been made!');
// })

const arrFile = filesystem.readFileSync('./array.js', {
    encoding: ''
});

// console.log(arrFile);

const {ipsum, logLoremIpsum, stringToUppercase, colors} = require('./module.js');

// stringToUppercase('Testeroo');
// console.log(lorem, ipsum);

// logLoremIpsum();
console.log(stringToUppercase('Anger leads to suffering'));

colors.forEach(color => {
    console.log(color);
});
