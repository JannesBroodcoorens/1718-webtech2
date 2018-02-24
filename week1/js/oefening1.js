/********************************************************************* 
* @author     Jannes Broodcoorens
* @created    15/02/2018
* @modified   15/02/2018
* @copyright  Copyright © 2017-2018 Artevelde University College Ghent
* @function   Javascript Oefening 1
*********************************************************************/
"use strict";

/* oefening 1
let number = prompt('Voer een getal in:');
let text = 'Het getal dat u invoerde was: ' + number + '. Is dit correct?';
let textNew = `Het getal dat u invoerde was: ${number}. Is dit correct?`;
document.write(text);
document.write(textNew);
*/

/* oefening 4
let amountdigits = number.length;
let textDigits = `<br> Uw getal telt ${amountdigits} karakters. Is dit correct?`;
document.write(textDigits);
*/

/* oefening 5
let numberOne = prompt('Voer het eerste getal in:');
let numberTwo = prompt('Voer het tweede getal in:');

//voorbeeld numberTwo = "21ee" zal niet werken met Number, parseInt zet dit om in 21

let total = parseInt(numberOne) + Number(numberTwo);
console.log(total); */

/* oefening 6
let countResult = 11;
console.log(countResult++); //11, bij ++ na de variabele logt hij eerst en telt hij erna 1 bij
console.log(countResult); //12
console.log(++countResult); //13, bij ++ voor de variabele telt hij eerst 1 bij en logt hij daarna
console.log(countResult); //13
*/


/* oefening 7
let bankenrij = ['Jannes','Bruno','Rune', "Dries", 'Sander'];
bankenrij.push('Jeroen');
let aantal = bankenrij.length;
document.write(aantal);
let namen = '<br>' + bankenrij[0] + ' ' + bankenrij[2] + ' ' + bankenrij[4];
document.write(namen);
*/

/* oefening 8
let seconds = prompt('Geef aantal seconden in');
let hours = parseInt(parseInt(seconds) / 3600);
seconds %= 3600;
let minutes = parseInt(parseInt(seconds) / 60);
let restSeconds = seconds % 60;

console.log(`Uren: ${hours}, minuten: ${minutes}, seconden: ${restSeconds}
`);
*/






