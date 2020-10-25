module.exports = function toReadable (number) {
    function inWords(num) {
        return {

            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',

        }[num];
    }

    function inWordsTeen(num) {
        return {
            0: 'ten',
            1: 'eleven',
            2: 'twelve',
            3: 'thirteen',
            4: 'fourteen',
            5: 'fifteen',
            6: 'sixteen',
            7: 'seventeen',
            8: 'eighteen',
            9: 'nineteen',
        }[num];
    }

    function inWordsTy(num) {
        return {
            2: 'twen',
            3: 'thir',
            4: 'for',
            5: 'fif',
            6: 'six',
            7: 'seven',
            8: 'eigh',
            9: 'nine',
        }[num];
    }

    let str = [];
    let strNumber = number.toString();
    if (strNumber.length > 1) {
        for (let i = 0; i < strNumber.length; i++) {

            if (strNumber.length - i === 3) {
                str.push(inWords(strNumber[i]));
                str.push('hundred');
            }

            if (strNumber.length - i === 2 && strNumber[i] >= 2)
                str.push(inWordsTy(strNumber[i]) + 'ty');

            if (strNumber.length - i === 2 && strNumber[i] === '1') {
                str.push(inWordsTeen(strNumber[i + 1]));
                return str.join(' ');
            }

            if (strNumber.length - i === 1 && strNumber[i + 1] !== 1) {
                str.push(inWords(strNumber[i]));
            }
        }
    } else {
        if (number === 0) return 'zero';
        else
            str.push(inWords(number));
    }

    return str.join(' ').trim();
}
