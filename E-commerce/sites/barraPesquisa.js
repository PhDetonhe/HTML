const produtos = [
  { nome: "Vortex", link: "Cadastro.html" },
  { nome: "SkyRun", link: "Cadastro.html" },
  { nome: "Fênix", link: "Cadastro.html" },   
  { nome: "Storm", link: "Cadastro.html" },
  { nome: "AeroStep", link: "masc.html" },
  { nome: "Thunder", link: "masc.html" },
  { nome: "Horizon", link: "masc.html" },
  { nome: "Nitro", link: "masc.html" },
  { nome: "Pegasus", link: "fem.html" },
  { nome: "Vector", link: "fem.html" },
  { nome: "Zenith", link: "fem.html" },
  { nome: "Flux", link: "fem.html" }
];

const Pesquisa = document.getElementById("Pesquisa");
const sugestao = document.getElementById("sugestao");


Pesquisa.addEventListener("focus", () => {
  atualizarSugestoes();
  sugestao.style.display = "block";
});


Pesquisa.addEventListener("input", atualizarSugestoes);


Pesquisa.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const valor = Pesquisa.value.toLowerCase();
    const produto = produtos.find(p => p.nome.toLowerCase() === valor);
    if (produto) {
      window.location.href = produto.link;
    } else {
      alert("Produto não encontrado!");
    }
  }
});

function atualizarSugestoes() {
  const filtro = Pesquisa.value.toLowerCase();
  sugestao.innerHTML = "";

  const filtrados = produtos.filter(item =>
    item.nome.toLowerCase().includes(filtro)
  );

  if (filtrados.length === 0) {
    sugestao.style.display = "none";
    return;
  }

  filtrados.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item.nome;
    div.addEventListener("click", () => {
      Pesquisa.value = item.nome;
      sugestao.style.display = "none";
      window.location.href = item.link;
    });
    sugestao.appendChild(div);
  });

  sugestao.style.display = "block";
}


document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    sugestao.style.display = "none";
  }

});
