const livros = [
    {
        imagem: "livro1.jpg",
        titulo: "Frankeinstein",
        texto: "Victor Frankenstein desafia os limites da ciência e dá vida a uma criatura feita de pedaços de corpos esquecidos. Mas o que era para ser uma conquista se transforma em um pesadelo sem fim. A criatura rejeitada volta-se contra o criador ― e nada nem ninguém está a salvo."
    },
    {
        imagem: "livro2.jpg",
        titulo: "Dracula",
        texto: "Na história, um casal e seus amigos são atormentados por Conde Drácula, uma entidade sobrenatural e hematófoga que, presa em uma maldição contagiosa, pretende se mudar de seu recluso castelo na Transilvânia para a efervescente Londres do século XIX. Com a ajuda do professor Van Helsing, o grupo de amigos pretende enfrentar o morto-vivo, mesmo com todos os perigos que a ofensiva trará."
    },
    {
        imagem: "livro3.jpg",
        titulo: "Crime e Castigo",
        texto: "Raskólnikov, um jovem estudante, pobre e desesperado, perambula pelas ruas de São Petersburgo até cometer um crime que tentará justificar por uma teoria: grandes homens, como César ou Napoleão, foram assassinos absolvidos pela História. Este ato desencadeia uma narrativa labiríntica que arrasta o leitor por becos, tabernas e pequenos cômodos, povoados de personagens que lutam para preservar sua dignidade contra as várias formas da tirania."
    },
    {
        imagem: "livro4.jpg",
        titulo: "A hora da estrela: Edição comemorativa",
        texto: "A nordestina Macabéa, a protagonista de A hora da estrela, é uma mulher miserável, que mal tem consciência de existir. Depois de perder seu único elo com o mundo, uma velha tia, ela viaja para o Rio, onde aluga um quarto, se emprega como datilógrafa e gasta suas horas ouvindo a Rádio Relógio. Apaixona-se, então, por Olímpico de Jesus, um metalúrgico nordestino, que logo a trai com uma colega de trabalho. Desesperada, Macabéa consulta uma cartomante, que lhe prevê um futuro luminoso, bem diferente do que a espera."
    }
]

let indice = 0;

function mostrarLivros() {
    document.getElementById("imgLivro").src = livros[indice].imagem;

    document.getElementById("tituloLivro").textContent = livros[indice].titulo;

    document.getElementById("textoLivro").textContent = livros[indice].texto
}

mostrarLivros();

document.getElementById("proximo").addEventListener("click", () =>{
    indice++;
    if(indice >= livros.length) indice = 0;
    mostrarLivros();
})

document.getElementById("anterior").addEventListener("click", () =>{
    indice--;
    if(indice < 0) indice = livros.length - 1;
    mostrarLivros();
})