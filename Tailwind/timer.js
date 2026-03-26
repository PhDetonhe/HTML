let display = {
    dias: document.querySelector("#dias"),
    horas: document.querySelector("#horas"),
    minutos: document.querySelector("#minutos"),
    segundos: document.querySelector("#segundos")
};

function startCountdown(duracao, display){
    let timer = duracao,
    dias,
    horas,
    minutos,
    segundos;

    setInterval(() => {
    dias = Math.floor(timer / (60 * 60 * 24));
    horas = Math.floor(timer % (60 * 60 * 24) / (60 * 60));
    minutos = Math.floor((timer % (60 * 60)) / 60);
    segundos = Math.floor(timer % 60)    

    display.dias.textContent = dias;
    display.horas.textContent = horas;
    display.minutos.textContent = minutos;
    display.segundos.textContent = segundos;

    if (--timer < 0){
        timer = duracao;
    }
    }, 1000);
}

 window.onload = () => {
        const countdownTime = 60 * 60 * 24 * 5;
        startCountdown(countdownTime, display);
    }
