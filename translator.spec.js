import { translateToMorse } from "./translator";


describe("Testing translateToMorse", () => {
    it("doesn't convert spaces if entered on their own", () => {
        let result = translateToMorse(" ")
        expect(result).toBe("")
    })

    it("convert spaces to / when in a sentence", () => {
        let result = translateToMorse("Good morning")
        expect(result).toBe("--. --- --- -.. / -- --- .-. -. .. -. --.")
    })

    it("convert numbers to morse code", () => {
        let result = translateToMorse("1 2 3 4 5 6 7 8 9 0")
        expect(result).toBe(".---- / ..--- / ...-- / ....- / ..... / -.... / --... / ---.. / ----. / -----")
    })

    it("convert lowercase alphabet into morse code", () => {
        let result = translateToMorse('a b c d e f g h i j k l m n o p q r s t u v w x y z')
        expect(result).toBe('.- / -... / -.-. / -.. / . / ..-. / --. / .... / .. / .--- / -.- / .-.. / -- / -. / --- / .--. / --.- / .-. / ... / - / ..- / ...- / .-- / -..- / -.-- / --..')
    })

    it("convert uppercase alphabet into morse code", () => {
        let result = translateToMorse('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z')
        expect(result).toBe('.- / -... / -.-. / -.. / . / ..-. / --. / .... / .. / .--- / -.- / .-.. / -- / -. / --- / .--. / --.- / .-. / ... / - / ..- / ...- / .-- / -..- / -.-- / --..')
    })

    it("convert punctuation into morse code", () => {
        let result = translateToMorse(". , ? ' ! / ( ) & : ; = + - _ \" @")
        expect(result).toBe('.-.-.- / --..-- / ..--.. / .---. / -.-.-- / -..-. / -.--. / -.--.- / .-... / ---... / -.-.-. / -...- / .-.-. / -....- / ..--.- / .-..-. / .--.-.')
    })

    it("return ! if the symbol is unrecognised", () => {
        let result = translateToMorse("£ $ % ^ ¬ `")
        expect(result).toBe("Warning, unknown symbol: ! / ! / ! / ! / ! / !")
    })

    it("return letters within a word seperated by a space", () => {
        let result = translateToMorse("Hello")
        expect(result).toBe(".... . .-.. .-.. ---")
    })
    
    it("returns a warning if ! is contained within the response", () => {
        let result = translateToMorse('£4.99')
        expect(result).toBe("Warning, unknown symbol: ! ....- .-.-.- ----. ----.")
    })
})