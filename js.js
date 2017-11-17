function Quote(quote,author){
    this.string=quote;
    this.author=author;
    this.printQuote=function(){
        document.write(this.string);
        document.write(this.author);
    }
}

var quote1=new Quote("a","b");
var quote2=new Quote("w","z");
var quote3=new Quote("e","x");
var quote4=new Quote("r","c");
var quote5=new Quote("t","v");
var quote6=new Quote("y","b");
var quote7=new Quote("u","n");
var quote8=new Quote("i","m");


function makeArray(){
    var quoteArr=[quote1,quote2,quote3];
    for(var i=0;i<quoteArr.length;i++){
        document.write(quoteArr[i].)
    }
}


function randomQuote(){
    var c=Math.random();
    var d=Math.floor(c);
    document.write(c +"\n"+ d);
}

randomQuote();