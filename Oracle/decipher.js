function decipher(something) {
    let input = document.getElementById('input').value;
    let i = 0
    let char = input.split('')

    if (something == 1) {
        while (i < char.length) {
            if (char[i] == 'e') {
                char[i] = 'enter'
            } else if (char[i] == 'i') {
                char[i] = 'imes'
            } else if (char[i] == 'a') {
                char[i] = 'ai'
            } else if (char[i] == 'o') {
                char[i] = 'ober'
            } else if (char[i] == 'u') {
                char[i] = 'ufat'
            }

            i++;
        }

        document.getElementById('output').innerHTML = char.join("")

    } else if (something == 2) {
        for (let i = 0; i < 1;) {
            if (input.includes('enter')) {
                input = input.replaceAll('enter', 'e')
            } else if (input.includes('imes')) {
                input = input.replaceAll('imes', 'i')
            } else if (input.includes('ai')) {
                input = input.replaceAll('ai', 'a')
            } else if (input.includes('ober')) {
                input = input.replaceAll('ober', 'o')
            } else if (input.includes('ufat')) {
                input = input.replaceAll('ufat', 'u')
            } else {
                i++
            }

        }
        document.getElementById('output').innerHTML = input
    }


}