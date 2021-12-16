const logLoremIpsum = () => {
    console.log('Pain leads to anger');
}

const stringToUppercase = (str) => {
    return str.toUpperCase();
}

const colors = [
    '#FFF',
    '#000'
];

exports.colors = colors;
exports.lorem = 'Lorem ipsum';
exports.ipsum = 'Ipsum dolor sit amet';
exports.logLoremIpsum = () => logLoremIpsum();
exports.stringToUppercase = s => stringToUppercase(s);

module.exports = {
    colors: colors,
    lorem: 'Lorem ipsum'
}