var arr =[{
  name: 'Larry'
}, {
  name:'Steven'
}, {
  name: 'Carol'
}, {
  name:'Anita'
}, {
  name:'Dragos'
}, {
  name: 'Cosmin'
}];

//Larry, Steven, Carol si Cosmin.
var string = '',
length = arr.legth,
i = 0;

for (i = 0; i < length; i++) {

  if ( i === length - 2) {
    string += arr[i].name + ' , ';
  } else if ( i === length - 2) {
    string += ' si ';
    }
  }
  string += '.';
  console.log(string);
