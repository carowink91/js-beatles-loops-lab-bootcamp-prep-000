var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];


function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var newString = `${musicians[i]} plays ${instruments[i]}`;
    newArray.push(newString);
  }
  return newArray;
}



const facts = [
  "He was a small noodle", "He never spoke", "He worshipped his body", "He revered all geese"];

var i = 0;

function johnLennonFacts (facts) {
  while (i < facts.length) {
   facts[i].concat("!!!");
   i++
  }
  return facts;
}
