const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    var parts = expr.split(/(.{10})/).filter(O=>O);
    let arr;
    arr = parts.map(el => {
        return el.split(/(.{2})/).filter(O=>O).map(e => {
            if (e === '**') return '**'
            if (e === '11') return '-'
            if (e === '10') return '.'
            if (e === '00') return ''
        } ).join('');
    });
    return arr.map(ele=> MORSE_TABLE[ele] ).join('')
}

module.exports = {
    decode
}