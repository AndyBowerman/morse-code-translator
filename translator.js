export const translateToMorse = (string) => {
    const morseLookUp = {
        a: '.-', b:'-...', c: '-.-.', d:'-..', e: '.', f: '..-.', g:'--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--',
        n: '-.', o:'---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..',
        1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.', 0: '-----', '.': '.-.-.-',
        ',': '--..--', '?': '..--..', "'": '.---.', '!': '-.-.--', "/": '-..-.', "(": '-.--.', ")": '-.--.-', "&": ".-...", ':': '---...',
        ";": '-.-.-.', "=": '-...-', "+": '.-.-.', "-":'-....-', "_": '..--.-', '"': '.-..-.', "@": '.--.-.', " ": "/"
    }
    
    const arr = string.trim().split('');
    const newArr = arr.map(item => morseLookUp[item.toLowerCase()] != undefined ? morseLookUp[item.toLowerCase()] + " " : "! ");
    return newArr.includes('! ') ? `Warning, unknown symbol: ${newArr.join('').trim()}` : newArr.join('').trim();
}

module.exports = {translateToMorse};