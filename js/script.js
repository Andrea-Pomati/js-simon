/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
 i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri,
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Gestire l'inserimento dei numeri tramite 5 input diversi.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/


//Visualizzare in pagina 5 numeri casuali. 


let randomNumbers = [];
while(randomNumbers.length < 5){
    let r = Math.floor(Math.random() * 100) + 1;
    if(randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
}
console.log(randomNumbers);

document.writeln(randomNumbers)


//Da lì parte un timer di 10 secondi.
// setTimeout( , 10000);

