const cateorias = [
    {
        nome: "A hipotese do amor", link:"Romance.html"
    },
    {
        nome: "Os sete maridos de Evelyn Hugo", link:"Romance.html"
    },
    {
        nome: "HeartStopper", link:"Romance.html"
    },
    {
        nome:"Percy Jackson e o Olimpianos", link:"Acao.html"
    },
    {
        nome:"O codigo Da Vinci", link:"Acao.html"
    },
    {
        nome:"O Instituto", link:"Acao.html"
    },
    {
        nome:"Blade Runner", link:"Ficcao.html"
    },
    {
        nome:"A Guerra dos mundos", link:"Ficcao.html"
    },
    {
        nome:"Universos Peculiares", link:"Acao.html"
    },
    {
        nome:"Necronomicon", link:"Terror.html"
    },
    {
        nome:"Sr. Providence", link:"Terror.html"
    },
    {
        nome:"It: A Coisa", link:"Terror.html"
    },
    {
        nome:"Edgar Allan Poe", link:"Terror.html"
    },
    {
        nome:"Assasinato no expresso oriente", link:"Terror.html"
    },
    {
        nome:"E não sobrou nenhum", link:"Terror.html"
    },

]

const Pesquisa = document.getElementById("Pesquisa");

Pesquisa.addEventListener("input", atualizarSugestoes);

document.getElementById("Pesquisa").addEventListener("keydown", (e) => {
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