function Pere2Dec() {
    var numok = document.getElementById('numok')
    var nummal = document.getElementById('nummal')
    var resultado = document.getElementById('resultado').value
    var result = document.getElementById('result')
    result.innerHTML = parseInt(resultado, 2);
    var numero = resultado.charAt(resultado.length - 1)

    if (resultado == '') {
        result.innerHTML = ''
    }
    if (numero == 0 || numero == 1) {
        numok.innerHTML = 'Here is your result'
        nummal.innerHTML = ''
    } else {
        result.innerHTML = 'Waiting for a binary number (0-1)'
    }
    if (numero >> 1 || numero >> 10000) {
        numok.innerHTML = ''
        nummal.innerHTML = '{please enter only this numbers 0 or 1}'
    }
    if (numero == '') {
        numok.innerHTML = ''
        nummal.innerHTML = ''
    }
}