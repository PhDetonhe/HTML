document.getElementById('formulario').addEventListener('submit', async function (e) {
    e.preventDefault();
    const temp = parseFloat(document.getElementById('temp').value);
    const de = document.getElementById('de').value;
    const para = document.getElementById('para').value;

    try {
        const response = await fetch('http://localhost:8080/conversor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                temp: temp,
                de: de,
                para: para
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
