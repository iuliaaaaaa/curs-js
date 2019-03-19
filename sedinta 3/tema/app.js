var lisa= {
  name: 'Lisa',
  species: 'catel',
  age: 4
};
var mio={
  name: 'Mio',
  species: 'pisica',
  age: '1',
};
var mao= {
  name: 'Mao',
  species: 'pisica',
  age: '1/2',
};

var person = {
  name: 'Iulia',
  lastname: 'Toderascu',
  email: 'toderascuiulia@yahoo.com',
  birthYear: '11 nov 2002',
  age: 16,
  zipCode: '040103',
  pets: [lisa, mio, mao],

};


person.pets.lisa = lisa;
person.pets.mio = mio;
person.pets.mao = mao;

console.log(person.pets);
console.log('Numele meu este:' + ' ' + person.name + ' ' + person.lastname + ' ' + ' si am ' + person.pets.length + ' animale.');
console.log('Am acelasi email din copilarie: ' + person.email);
console.log('Unul dintre cele ' + person.pets.length + ' animale ale mele este ' + person.pets.lisa.species +
' si are ' + person.pets.lisa.age + ' ani.');
var pets= [lisa,mio,mao];
console.log(pets[2]);
console.log(2019 - person.pets.mao.age);

var difference = (person.age - person.pets.lisa.age);
var petName = person.pets.lisa.name;
console.log('Intre ' + person.name + ' si ' + person.pets.lisa.name + 'este o diferenta de ' + ' ' + difference + ' ani.');
//tema optionala//
