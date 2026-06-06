function calcularAmor() {

    const nome1 = document.getElementById("nome1").value.trim().toLowerCase();
    const nome2 = document.getElementById("nome2").value.trim().toLowerCase();

    if (!nome1 || !nome2) {
        alert("Digite os dois nomes!");
        return;
    }

    const lucas = [
        "leonardo",
        "alemao",
        "loirudo",
        "gringo",
        "gringo lindo",
        "anzol",
        "lucas",
        "correa",
        "corrêa",
        "siedschlag",
        "lucas correa",
        "lucas corrêa",
        "lucas siedschlag",
        "lucas siedschlag correa",
        "lucas siedschlag corrêa"
    ];

    const thais = [
        "leticia",
        "tata",
        "tatha",
        "manga",
        "camomila",
        "monica",
        "thais",
        "thaís",
        "michelon",
        "thais michelon",
        "thaís michelon",
        "thais dos santos",
        "thaís dos santos",
        "thais dos santos michelon",
        "thaís dos santos michelon"
    ];

    const temLucas =
        lucas.some(nome => nome1.includes(nome)) ||
        lucas.some(nome => nome2.includes(nome));

    const temThais =
        thais.some(nome => nome1.includes(nome)) ||
        thais.some(nome => nome2.includes(nome));

    const texto = nome1 + nome2;

    let soma = 0;

    for (let i = 0; i < texto.length; i++) {
        soma += texto.charCodeAt(i);
    }

    let porcentagem;

    // Lucas + Thaís = 100%
    if (temLucas && temThais) {

        porcentagem = 100;

    }
    // Lucas ou Thaís com outra pessoa
    else if (temLucas || temThais) {

        porcentagem = 50 + (soma % 49); // 50 até 98

    }
    // Outros casais nunca chegam a 100
    else {

        porcentagem = 50 + (soma % 49); // 50 até 98

    }

    let mensagem = "";

    if (porcentagem === 100) {

        mensagem =
            "💜 Seus destinos foram traçados na maternidade.";

    } else if (porcentagem >= 85) {

        mensagem =
            "🥰 Existe uma conexão muito especial entre vocês.";

    } else if (porcentagem >= 70) {

        mensagem =
            "💕 Tem muita química aqui!";

    } else if (porcentagem >= 60) {

        mensagem =
            "😊 Tem potencial para algo bonito.";

    } else {

        mensagem =
            "😅 Talvez precisem conversar mais...";
    }

    animarResultado(porcentagem, mensagem);
}

function animarResultado(valorFinal, mensagem) {

    const percentual = document.getElementById("percentual");
    const heartFill = document.getElementById("heart-fill");
    const mensagemEl = document.getElementById("mensagem-amor");
    const heartContainer = document.querySelector(".heart-container");

    clearInterval(window.animacaoAmor);

    let atual = 0;

    percentual.textContent = "0%";
    heartFill.style.height = "0%";
    mensagemEl.textContent = "";

    heartContainer.classList.remove("pulse");

    window.animacaoAmor = setInterval(() => {

        atual++;

        percentual.textContent = atual + "%";
        heartFill.style.height = atual + "%";

        if (atual >= valorFinal) {

            clearInterval(window.animacaoAmor);

            mensagemEl.textContent = mensagem;

            if (valorFinal === 100) {

                document.querySelector(".heart-container")
                    .classList.add("pulse");

                chuvaDeCoracoes();
            }
        }

    }, 20);
}

function chuvaDeCoracoes() {

    for (let i = 0; i < 40; i++) {

        const emojis = ["💜", "💖", "💕", "💘", "💞"];

        coracao.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

        coracao.style.position = "fixed";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.top = "-50px";

        coracao.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        coracao.style.zIndex = "9999";
        coracao.style.pointerEvents = "none";

        coracao.style.transition =
            "transform 4s linear, opacity 4s linear";

        document.body.appendChild(coracao);

        setTimeout(() => {

            coracao.style.transform =
                `translateY(${window.innerHeight + 100}px)`;

            coracao.style.opacity = "0";

        }, 50);

        setTimeout(() => {
            coracao.remove();
        }, 4000);
    }
}