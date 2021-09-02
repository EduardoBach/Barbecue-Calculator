
let inputAdultos= document.getElementById("adultos")
let inputCriancas= document.getElementById("criancas")
let inputDuracao= document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let TotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let TotalCerveja = cervejaPP(duracao) * adultos + (cervejaPP(duracao) / 2 * criancas);
    let TotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML= `<P>${TotalCarne/1000} Kg de carne</p>`
    resultado.innerHTML+= `<P>${Math.ceil(TotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML+= `<P>${Math.ceil(TotalBebidas/2000)} Pets de Bebidas</p>`

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
