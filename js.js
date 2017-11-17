var quote1 = new Quote("a", "b");
var quote2 = new Quote("w", "z");
var quote3 = new Quote("e", "x");
var quote4 = new Quote("r", "c");
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
  document.write(arrayObjects[numberQuoteChosen].quote);
  document.write(arrayObjects[numberQuoteChosen].author);
}

createArrayOfObjects();
printQuote();
