function Quote(quote, author) {
  this.string = quote;
  this.author = author;
}

var quote1 = new Quote("a", "b");
var quote2 = new Quote("w", "z");
var quote3 = new Quote("e", "x");
var quote4 = new Quote("r", "c");

function printStuff() {
  var arOb = [quote1, quote2, quote3, quote4];

  for (var i = 0; i < arOb.length; i++) {
    var print = "";
    for (var cp in arOb[i]) {
      print = print + " " + arOb[i][cp] + "<br></br>";
    }
    document.write(print);
  }
}

function randomQuote() {
    
  //Add objects to an array
  var arOb = [];
  for (var k = 1; k <= 4; k++) {
    arOb.push(window["quote" + k]);
  }
  document.write(arOb[0].author);

  //Random number picker
  var c = Math.random() * (arOb.length - 1 + 1) + 1;
  var d = Math.floor(c);
  document.write();
}

randomQuote();
