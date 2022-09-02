const englishInputBox = document.querySelector('#english__input');
const morseOutputBox = document.querySelector('#morse__output');
const morseInputBox = document.querySelector("#morse__input");
const englishOutputBox = document.querySelector('#english__output');

const translateToMorse = (string) => {
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


const morseToEnglish = (string) => {
    const englishLookUp = {
        '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l', '--': 'm',
        '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y', '--..': 'z',
        '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '-----': '0', '.-.-.-': '.',
        '--..--': ',', '..--..': '?', '.---.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ")", ".-...": '&', '---...': ":",
        '-.-.-.': ";", '-...-': '=', '.-.-.': "+", '-....-': "-", '..--.-': "_", '.-..-.': '"', '.--.-.': "@", "/": " "
    }

    const arr = string.trim().split(' ');
    const translatedString = arr.map(item => englishLookUp[item]).join('')
    const splitBySentence = translatedString.split('.');
    const nestedArr = splitBySentence.map(item => item.trim().split(''))
    const nestedCapArr = nestedArr.map(item => item.map((letter, index) => index == 0 ? letter.toUpperCase() : letter))
    const final = nestedCapArr.map(item => item.join(''));
    return final.join('. ').trim();
}





// Convert English to Morse Code

const translateAndDisplayMorse = () => {
    morseOutputBox.innerHTML = `<p>${translateToMorse(englishInputBox.value)}<p/>`;
}

englishInputBox.addEventListener('keyup', translateAndDisplayMorse)


// Convert Morse Code to English

const translateAndDisplayEnglish = () => {
    englishOutputBox.innerHTML = `<p>${morseToEnglish(morseInputBox.value)}</p>`;
}



morseInputBox.addEventListener('keyup', translateAndDisplayEnglish);