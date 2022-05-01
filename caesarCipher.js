function caesarCipher(text, num) {
    let shiftedArray = [];

    let arr =
        [
            'a', 'b', 'c', 'd', 'e', 'f',
            'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x',
            'y', 'z'
        ]

    let textArray = text.toLowerCase().split("");

    textArray.map(letter => {
        if (arr.includes(letter)) {
            shiftedArray.push(arr[arr.indexOf(letter) + num]);
        }
    })
    let cipher = shiftedArray.join("");
    return cipher;
}

module.exports = caesarCipher;