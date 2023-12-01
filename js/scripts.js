/*
    Il programma dovrà chiedere all'utente il numero di chilometri 
    che vuole percorrere e l'età del passeggero.
    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
    secondo queste regole:
    1) il prezzo del biglietto è definito in base ai km (0.21 € al km) OK
    2) va applicato uno sconto del 20% per i minorenni
    3) va applicato uno sconto del 40% per gli over 65.
    4) L'output del prezzo finale va messo fuori in forma umana 
    (con massimo due decimali, per indicare centesimi sul prezzo). 
    Questo richiederà un minimo di ricerca. 
*/

let userKm = prompt('Quanti Kilometri vuoi percorrere?');
console.log ('userKm', userKm, typeof userKm);


let price = (userKm * 0.21);
console.log(price);
document.getElementById('#price').innerHTML = price;

let userAge = prompt ('Quanti anni hai?');
console.log ('userAge', userAge, typeof userAge);

let priceDiscountJunior = 20;
let priceDiscountSenior = 40;
let finalPrice;
let discount = 0;

if (userAge < 18){
    discount = ((price * priceDiscountJunior) / 100);
}
else if (userAge > 65){    
    discount = ((price * priceDiscountJunior) / 100);    
}

finalPrice = price - discount;

price = price.toFixed(2);

document.getElementById('#price').innerHTML = finalPrice;

