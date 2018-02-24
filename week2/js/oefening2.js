//oefening1 easy
/*
let number = prompt('Voer een getal in')
if (number % 2 === 0){
    document.write("Het getal is even")
} else{
    document.write("Het getal is oneven")
}
*/

//fancy
/* 
    let checkEvenOrOdd = function(){
    let number = document.getElementById('someNumber').value;
    let rest = number % 2;
    
  if (rest === 0){
    document.getElementById('result').innerHTML = 'Een even getal';
  } else{
    document.getElementById('result').innerHTML = 'Een oneven getal';
    }  
  }
  
  document.getElementById('checkInput').addEventListener('click', checkEvenOrOdd);
*/  

// fancy met argumenten
let checkEvenOrOddArg = function (number) {
    let rest = number % 2;
    let result;
console.log(number);
    if(rest === 0){
        result = 'Een even getal';
} else {
        result = 'Een oneven getal';
    }
return result;
}

let getNumberAndCheck = function(){
    let result;
    let someNumber = document.getElementById('someNumber').value;
    result = checkEvenOrOddArg(someNumber);
    document.getElementById('result').innerHTML = result;
}

let resultEvenOrOdd = document.getElementById('checkInput').addEventListener('click', getNumberAndCheck);
//oefening2
/*
let integerNumber = 7;
let text = 'test';
let bolean = true;
*/

//oefening3 fancy
/*
let rij = ["Bruce", "Jannes", "Bruno", "Sam"];
for (i = 0; i < rij.length; i++){
    console.log(rij[i]);
}
*/

//oefening4
/*
let punten = parseInt(prompt('Voer uw behaalde score in'));
switch(true){
    case (punten < 68 && punten > 50) : 
        document.write('Voldoende')
        break;
    case (punten > 68 && punten < 77) :
        document.write('Onderscheiding')
        break;
    case (punten > 77 && punten < 85) :
        document.write('Grote Onderscheiding')
        break;
    case (punten > 85 && punten < 90) :
        document.write('Grootste Onderscheiding')
        break;
    case (punten > 90 && punten < 100) :
        document.write('Grootste Onderscheiding en de gelukwensen van de examencommissie')
        break;
}
*/