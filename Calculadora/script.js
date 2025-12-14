const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator-buttons button");

let num1 = null;
let operacao = null;
let esperandoSegundoNumero = false;

display.value = "0";

buttons.forEach(button => {
    button.addEventListener("click", async () => {
        const valor = button.innerText;

        if (valor === "C") {
            display.value = "0";
            num1 = null;
            operacao = null;
            esperandoSegundoNumero = false;
            return;
        }

        if (!isNaN(valor) || valor === ".") {
            if (display.value === "0" || esperandoSegundoNumero) {
                display.value = valor;
                esperandoSegundoNumero = false;
            } else {
                display.value += valor;
            }
            return;
        }

        if (["+", "-", "*", "/"].includes(valor)) {
            num1 = parseFloat(display.value);

            switch (valor) {
                case "+":
                    operacao = "somar";
                    break;
                case "-":
                    operacao = "subtrair";
                    break;
                case "*":
                    operacao = "multiplicar";
                    break;
                case "/":
                    operacao = "dividir";
                    break;
            }

            esperandoSegundoNumero = true;
            return;
        }

        if (valor === "=") {
            const num2 = parseFloat(display.value);

            try {
                const response = await fetch("http://localhost:8080/calcular", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams({
                        num1: num1,
                        num2: num2,
                        operacao: operacao
                    })
                });

                const data = await response.json();

                if (data.errou) {
                    alert(data.errou);
                } else {
                    display.value = data.resultado;
                }

                num1 = null;
                operacao = null;

            } catch (e) {
                alert("Erro ao conectar com o servidor");
                console.error(e);
            }
        }

        if (valor === "x²") {
            const n = parseFloat(display.value);
            display.value = n * n;
        }

        if (valor === "%") {
            display.value = parseFloat(display.value) / 100;
        }
    });
});
