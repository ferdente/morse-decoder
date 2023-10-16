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
};

function decode(expr) {
        
    let arr = []

        for (let i = 0; i < expr.length; i + 10) {
            arr.push(expr.substring(i, i+10))
            i = i + 10
        }

    let arr2 = [];

        arr.forEach((e)=> {
            let litera = "";
            for(let i = 0; i < e.length; i++) {
                if (e[i] == '1'){
                litera += litera = e[i+1] === '0' ? '.' : "-";
                i++
                }
            }
            arr2.push(litera)
        })

    let arr3 = [];

        arr2.forEach((e)=> {
            if (e == ''){
                arr3.push(' ')
            }else{
        arr3.push(getValue(e, MORSE_TABLE))
        }
        })

    function getValue(key, obj) {
    return obj[key];
    }

    return arr3.join('')
}

module.exports = {
    decode
}
