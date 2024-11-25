let inputDistance = document.getElementById("distance");
let inputConsumption = document.getElementById("consumption");
let inputPrice = document.getElementById("price");

let result = document.getElementById("result");

let btn = document.getElementById("btnC");
btn.addEventListener('click', calculate);

function calculate() {
    console.log("Calculating...");

    let distance = parseFloat(inputDistance.value);
    let consumption = parseFloat(inputConsumption.value);
    let price = parseFloat(inputPrice.value);

    // Input validation
    if (isNaN(distance) || isNaN(consumption) || isNaN(price)) {
        alert("Por favor, preencha todos os campos com valores numéricos!");
        return;
    }

    if (distance <= 0 || consumption <= 0 || price <= 0) {
        alert("Por favor, insira valores maiores que zero!");
        return;
    }

    // Calculations
    let requiredFuel = distance / consumption;
    let totalCost = requiredFuel * price;

    // Displaying the result in Portuguese
    result.innerHTML = `<p>Combustível necessário: ${requiredFuel.toFixed(2)} litros</p>`;
    result.innerHTML += `<p>Custo total: R$ ${totalCost.toFixed(2)}</p>`;
}
