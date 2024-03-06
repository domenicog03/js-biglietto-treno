// chiedi km da percorrere
const kmtreno= parseInt(prompt('digita i km da percorrere'));
console.log(kmtreno);

//chiedi età passeggero
const etapass= parseInt(prompt('digita la tua età'));
console.log(etapass);

//calcolo prezzo standard biglietto 

const standardprice= kmtreno * 0.21;
console.log(standardprice);

//calcolo eventuale sconto

let finalprice=standardprice;

if(etapass < 18){
    const discount20=(finalprice*20)/100;
    console.log('sconto',discount20);
    finalprice=finalprice-discount20;
    console.log(finalprice);


 } else if (etapass > 60 ){
    const discount40=(finalprice*40)/100;
    console.log('sconto',discount40);
    finalprice=finalprice-discount40;
    console.log(finalprice);
 } 
    alert('il prezzo finale è'+ finalprice.toFixed(2));
 
