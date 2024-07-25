let lavadoraGrande = 4000
let lavadoraPqueña = 3000
let valorTotal = 0
let lavadorasPrestadas = 0 
let tipoDeLavadora = Number(prompt("ingrese 1 para lavadora grande o ingrese 2 para lavadora pequeña"))
if(tipoDeLavadora == 1){
    let lavadoras1Prestadas = Number (prompt("ingrese el numero de lavadoras que necesita"))
    let valor1 = lavadoras1Prestadas * lavadoraGrande
}else if(tipoDeLavadora == 2){
    let lavadoras2Prestadas = Number (prompt("ingrese el numero de lavadoras que necesita"))
    let valor2 = lavadoras2Prestadas * lavadoraPqueña
}else if(lavadorasPrestadas < 3){

    valorTotal = valor1 + valor2
}
else if(lavadorasPrestadas > 3){
        valorTotal - 3%valorTotal
}
alert(`el valor total es ${valorTotal}`)