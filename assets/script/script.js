const calcular = document.getElementById('calcular');
const resultado = document.querySelector('.resultado');

function imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    if (nome !== '' && peso !== '' && altura !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso';
        } else if (valorIMC < 25) {
            classificacao = 'no peso ideal';
        } else if (valorIMC < 30) {
            classificacao = 'levamente acima do peso';
        } else if(valorIMC < 35) {
            classificacao = 'com obesidade grau 1';
        } else if(valorIMC < 40) {
            classificacao = 'com obesidade grau 2';
        } else {
            classificacao = 'obesidade grau 3. Cuidado!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você estar ${classificacao}`

    } else {
        resultado.textContent = 'Preencha todos os campos'
    }
}

calcular.addEventListener('click', imc);


