


let num1 = '';
let num2 = '';
let operacao = '';
let display = document.getElementById('display');
document.getElementById('calculator-button').addEventListener('click', async function (e) {
    if(!e.target.matches('button'))
    return;

    const valorCalculo = e.target.value;

    if(!isNaN(valorCalculo) || valorCalculo === '.')
    {
        if(!operacao) {
            num1 += valorCalculo;
            display.textContent = num1;
        } else {
            num2 += valorCalculo;
            display.textContent = num2;
        } return;
    }

    if(['+', '-', '*', '/'].includes(valorCalculo)) {
        if(num1 === '') return;
        operacao = valorCalculo
        return;
    }


    if (valor === 'C') {
        num1 = '';
        num2 = '';
        operacao = '';
        display.textContent = '0';
        return;
    }

    if (valor === '='){
        if(num1 === '' || num2 === '' || !operacao) {
            display.textContent = "ERRO!";
            return;
        }
    }

    try {
        const response = await fetch('http://localhost:8080/calcular', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                num1: num1,
                num2: num2,
                operacao: operacao
            })
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

        if (data.erro) {
            document.getElementById('erro').textContent = data.erro;
        } else {
            document.getElementById('resultado').textContent = 'Resultado: ' + data.resultado;
        }

    } catch (err) {
        document.getElementById('erro').textContent = 'Erro: ' + err.message;
    }

    
});