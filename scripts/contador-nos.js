const inicio = new Date(2025, 10, 9, 0, 0, 0);

function atualizarContador() {

    const agora = new Date();

    let diferenca = agora.getTime() - inicio.getTime();

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const meses = Math.floor(diferenca / (dia * 30.44));

    diferenca %= (dia * 30.44);

    const dias = Math.floor(diferenca / dia);
    diferenca %= dia;

    const horas = Math.floor(diferenca / hora);
    diferenca %= hora;

    const minutos = Math.floor(diferenca / minuto);
    diferenca %= minuto;

    const segundos = Math.floor(diferenca / segundo);

    document.getElementById("contador-tempo").innerHTML =
        `Nos conhecemos há ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos e essa página é exclusivamente para lembrarmos alguma das muitas coisas que já fizemos nesse meio tempo aí` ;
}

atualizarContador();
setInterval(atualizarContador, 1000);