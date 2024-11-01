"use strict";
const linesexual = require('readline');
function leetfunc(text) {
    const leetalphabet = { 'A': '4', 'B': '8', 'C': '<', 'E': '3', 'G': '6', 'H': '#', 'I': '1', 'L': '|', 'O': '0', 'S': '5', 'T': '7', 'Z': '2' };    
    return text.split('').map(char => {
        const caps = char.toUpperCase();
        return leetalphabet[caps] || char;
    }).join('');
}


const translate = linesexual.createInterface({ input: process.stdin, output: process.stdout });
translate.question('your words :) -> ', (input) => {
    console.log(input)
    const text = leetfunc(input);
    console.log(`LeetSpeak -> ${text}`);
    translate.close();
});
