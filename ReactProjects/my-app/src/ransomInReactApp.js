import React from 'react';

let quote1 = "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. - By: Maurice Switzer, Mrs. Goose, Her Book";
let quote2 = "The fool doth think he is wise, but the wise man knows himself to be a fool. - By: William Shakespeare, As You Like It";
let quote3 = "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect). - By: Mark Twain";
let quote4 = "When someone loves you, the way they talk about you is different. You feel safe and comfortable.- By: Jess C. Scott, The Intern";
let quote5 = "Knowing yourself is the beginning of all wisdom. - By: Aristotle";

const multipleQuote = [];
multipleQuote.push(quote1, quote2, quote3, quote4, quote5)
let randomDec1 = Math.random() * multipleQuote.length;
let randomInt1 = Math.floor(randomDec1);
console.log(randomInt1)

let randomQuote = multipleQuote[randomInt1];
let splitedRandomQuotes = randomQuote.split("-")
let splitedQuote = splitedRandomQuotes[0];
let splitedAuthor = splitedRandomQuotes[1]

let qElement = document.getElementById("text");
qElement.innerHTML = splitedQuote;

let aElement = document.getElementById("author");
aElement.innerHTML = splitedAuthor;

function eventToHandler() {
    let randomDec2 = Math.random() * multipleQuote.length;
    let randomInt2 = Math.floor(randomDec2);
    console.log(randomInt2)

    let randomQuote = multipleQuote[randomInt2];
    let splitedRandomQuotes = randomQuote.split("-")
    let splitedQuote = splitedRandomQuotes[0];
    let splitedAuthor = splitedRandomQuotes[1]

    let qElement = document.getElementById("text");
    qElement.innerHTML = splitedQuote;

    let aElement = document.getElementById("author");
    aElement.innerHTML = splitedAuthor;
}
eventToHandler();



export default Quotes;