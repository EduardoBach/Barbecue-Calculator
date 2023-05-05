let inputAdultos= document.getElementById("adultos");
let inputCriancas= document.getElementById("criancas");
let inputDuracao= document.getElementById("duracao");

let resultado = document.getElementById("resultado");

let btn = document.getElementById("btnC");
btn.addEventListener('click', calcular);

function calcular(){
    console.log("Calculando...");

    let adultos = parseInt(inputAdultos.value);
    let criancas = parseInt(inputCriancas.value);
    let duracao = parseInt(inputDuracao.value);

    if (isNaN(adultos) || isNaN(criancas) || isNaN(duracao)) {
        alert("Por favor, preencha todos os campos com valores numéricos!");
        return;
    }

    if (adultos < 0 || criancas < 0 || duracao < 0) {
        alert("Não é permitido inserir valores negativos!");
        return;
    }

    let TotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let TotalCerveja = cervejaPP(duracao) * adultos + (cervejaPP(duracao) / 2 * criancas);
    let TotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML= `<p>${TotalCarne/1000} kg of meat</p>`;
    resultado.innerHTML+= `<p>${Math.ceil(TotalCerveja/355)} Beer cans</p>`;
    resultado.innerHTML+= `<p>${Math.ceil(TotalBebidas/2000)} Beverage Pets</p>`;
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 200;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
