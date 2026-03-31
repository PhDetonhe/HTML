fetch("http://localhost:8080/categorias")
    .then(response => response.json())
    .then(data => {
        const tabela = document.getElementById("sectionscategorias");

        data.forEach(categoria => {
            const linha = `
           <div class="bg-zinc-700 p-6 rounded-2xl w-80 mx-7 my-8 border border-white hover:scale-[1.02] transition">

            <h2 class="text-lg font-semibold mb-4 text-white">${categoria.nome}</h2>
            <h4 class="text-lg font-semibold mb-4 text-white">${categoria.descricao}</h4>

            <div class="flex justify-between text-sm">

            <button onclick="editar()"
            class="text-yellow-400 hover:underline">
            editar
            </button>

            <button onclick="excluir()"
            class="text-red-400 hover:underline">
            excluir
            </button>

            </div>

            </div>
            `;
            tabela.innerHTML += linha;
        });
    })
    .catch(error => console.error("Erro:", error));