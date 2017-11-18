var quote1 = new Quote("Don't cry because it's over, smile because it happened.", "Dr. Seuss");
var quote2 = new Quote("I'm selfish, impatient and a little insecure. I make mistakes, <br></br>I am out of control and at times hard to handle.<br></br> But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Marilyn Monroe");
var quote3 = new Quote("Be yourself; everyone else is already taken.", "Oscar Wilde");
var quote4 = new Quote("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein");
var numberQuotes = 4;

var arrayObjects = [];

//Variables min & max for range;
var startQuoteNumber = 0;
var endQuoteNumber = numberQuotes;

//Constructs the quotes
function Quote(quote, author) {
  this.quote = quote;
  this.author = author;
}

//Ads quotes to array
function createArrayOfObjects() {
  for (var k = 1; k <= numberQuotes; k++) {
    arrayObjects.push(window["quote" + k]);
  }
}

//Picks a number between range
function randomNumberPick() {
  var c =
    Math.random() * (endQuoteNumber - startQuoteNumber) + startQuoteNumber;
  var d = Math.floor(c);
  return d;
}

function printQuote() {
  var numberQuoteChosen = randomNumberPick();
  // document.write(arrayObjects[numberQuoteChosen].quote);
  // document.write(arrayObjects[numberQuoteChosen].author);
  quoteE.innerHTML= arrayObjects[numberQuoteChosen].quote;
  authorE.innerHTML= arrayObjects[numberQuoteChosen].author;
}



var button=document.getElementById("newQ");
var quoteE=document.getElementById("quoteElem");
var authorE=document.getElementById("authorElem");

button.addEventListener("click",printQuote);
createArrayOfObjects();
printQuote();
