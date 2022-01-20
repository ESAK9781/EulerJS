// const pnum = 5;
//
//
//
//
// let problem = require(`./p${pnum}.js`);
// problem.run();

console.log(decode('tgSrUm8QyGqQLW8oOODCuBGnliu7Qs7qCf8k00q0xUNzrMpX4lwndqJJf8RyGZIDfEDCUHf46ZnBG4DaNjfibFb9BiGardVYrdZt'));

function decode(message) {
    var offset = (5 * 86 * 20 * 0);
    return message.replace(/./g, function (char, position) {
        return String.fromCharCode((((char.charCodeAt(0) * position) + offset) % 77) + 48);
    });
}






























// End
