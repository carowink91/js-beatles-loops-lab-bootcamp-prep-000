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




var i = 0;

function johnLennonFacts (facts) {
  while (i < facts.length) {
   facts[i] = facts[i] + "!!!";
   i++;
  }
  return facts;
}



function iLoveTheBeatles (n) {
  var array = [];
  do {
    array.push(`I love the Beatles!`);
    n++;
  } while (n < 15);
  return array;
}