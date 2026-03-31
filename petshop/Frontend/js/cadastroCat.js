document.getElementById('registroForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    function redirecionarUsuarios(){
    window.location.href = "login2.html";
}

    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    

    let resultado = 0;
    let erro = 0;


    try {
        const response = await fetch('http://localhost:8080/categorias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                descricao: descricao

            })
        });

        if (!response.ok) {
            throw new Error('Erro na requisição');
        }

        const data = await response.json();

      if (data.erro) {
            document.getElementById('erro').textContent = data.erro;
        } else {
            document.getElementById('resultado').textContent = 'Categoria cadastrado com sucesso!';
            redirecionarUsuarios();
        }

    } catch (err) {
        document.getElementById('erro').textContent = 'Erro ao processar a requisição' + err.message;
    }
})