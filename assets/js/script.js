/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/*TOOLS: 
-variables cons/let
-prompt
- if/else
*/

//definire la variabile dei chilometri da percorrere
let distance = prompt("inserisci i km da percorrere")

//definire la variabile dell'età del passeggero
let age = prompt("inserisci la tua età")

//impostare la variabile del costo del biglietto
const price = (distance * 0.21) 

//fare un controllo di eventuali sconti
if (age < 18 ){
     //applicare lo sconto ai minorenni
    alert(price - price * 0.2 +"€")
}

else{
    alert(price +"€")
}



//applicare lo sconto alle persone over 65

console.log(price);
