/*
for( i = 0 ; i < 10 ; i++ ){
    console.log(i);
}
//0-9


for( i = 9 ; i > -1 ; i-- ){
    console.log(i);
}
//9-0


let favouuriteDrinks = [
    "banana milkshake",
    "water", 
    "tea"
];

console.log(favouuriteDrinks[0]);
console.log(favouuriteDrinks[1]);
console.log(favouuriteDrinks[2]);



let favMovies = ["avatar", "brother bear", "titanic", "limitless", "madagascar"];

favMovies.push("emoji movie", "doctor strange")

for (filmIndex = 0 ; filmIndex < favMovies.length; filmIndex++) {
    console.log(favMovies[filmIndex]);
}

const filmCheck() => {
    if (favMovies[2] != "ghostbusters") {
        console.log("booo we want ghostbusters")
    } else {
        console.log("yay ghostbusters")
    }}

filmCheck();

*/

//for( i = 0 ; i < 10 ; i++ ){
//    console.log(i);
//}

//let cards = ["Diamond", "Spade", "Heart", "Club"];
//let currentCard = "Spade";
//while(currentCard != "Spade"){
//    console.log(currentCard);
//    currentCard = cards[Math.floor(Math.random()*4)];
//}
//console.log(currentCard);




let number = 50;
let currentNumber = 0;
while(currentNumber != number){
    console.log(currentNumber);
    currentNumber = (Math.floor(Math.random()*51));
}













 

