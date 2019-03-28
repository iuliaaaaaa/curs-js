var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [{
    name: 'Twix',
    species: 'papagal',
    age: 4
  }, {
    name: 'Mars',
    species: 'caine',
    age: 2,
  }, {
    name: 'Bounty',
    species: 'hamster',
    age: 4
  }, {
    name: 'Lion',
    species: 'pisica',
    age: 10
  }]
};

var pets = ['Twix','Mars','Lion'];
pets.forEach(function(element, index, array) {
  console.log(element);
});

var totalSum = 0;
for(i = 0; i < person.pets.length ; i++) {
  var age = person.pets[i].age;
  totalSum = totalSum + age
console.log(totalSum);
};

for(i = 0; i <person.pets.length ; i++) {
function logArrayElements(element, index, array) {
  console.log(element + ' este ' + person.pets[i].species + ' si are ' +
  person.pets[i].age + ' ani ');
}
pets.forEach(logArrayElements);
};
var difference = 0
for(i = 0; i < person.pets.length; i++) {
  difference = person.age - person.pets[i].age;
  console.log(' Intre ' + person.firstName + ' si ' + person.pets[i].name +
  ' este o diferenta de ' + difference + ' ani ');
}
//if(element === 30) {
//return;
//}
