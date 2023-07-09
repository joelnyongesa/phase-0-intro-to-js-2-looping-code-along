// Code your solutions in this file
// for(let age = 30; age<40;age++){
//     console.log(`I am ${age} years old, Happy birthday to me!`);
//     debugger;
// }


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

// wrapGifts(gifts);

function writeCards(names, message){
    const cards = []
    for(let i=0;i<names.length;i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
        debugger;
    }
    return cards;
}

function countDown(number){
    let i = number;
    while(i>=0){
        console.log(i);
        i--;
    }
}

countDown(10);