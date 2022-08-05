

/// function declare 

function singara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;

    return quantity;

}

var myTaka = 150;
var singaras = singara(myTaka);
console.log('The quantity of singaray : ', singaras);