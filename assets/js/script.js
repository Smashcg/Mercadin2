var qtdeCebola = 0;
var qtdeBanana = 0;
var qtdeSal = 0;
var qtdeLeite = 0;
var qtdeSabao = 0;
var qtdeDesodorante = 0;

document.getElementById('qtdeCebola').innerHTML = qtdeCebola;
document.getElementById('qtdeBanana').innerHTML = qtdeBanana;
document.getElementById('qtdeSal').innerHTML = qtdeCafe;
document.getElementById('qtdeLeite').innerHTML = qtdeLeite;
document.getElementById('qtdeSabao').innerHTML = qtdeSabao;
document.getElementById('qtdeDesodorante').innerHTML = qtdeDesodorante;

function adiciona(produto) {
    switch (produto) {
        case 'cebola':
            document.getElementById('qtdeCebola').innerHTML = Number(document.getElementById('qtdeMaca').innerHTML) + 1;
            break;
        case 'banana':
            document.getElementById('qtdeBanana').innerHTML = Number(document.getElementById('qtdeBanana').innerHTML) + 1;;
            break;
        case 'sal':
            document.getElementById('qtdeSal').innerHTML = Number(document.getElementById('qtdeArroz').innerHTML) + 1;;
            break;
        case 'leite':
            document.getElementById('qtdeLeite').innerHTML = Number(document.getElementById('qtdeOleo').innerHTML) + 1;;
            break;
        case 'sabao':
            document.getElementById('qtdeSabao').innerHTML = Number(document.getElementById('qtdeDetergente').innerHTML) + 1;;
            break;
        case 'desodorante':
            document.getElementById('qtdeDesodorante').innerHTML = Number(document.getElementById('qtdeDesinfetante').innerHTML) + 1;;
            break;
    }
}