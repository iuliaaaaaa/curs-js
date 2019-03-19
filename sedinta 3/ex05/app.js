var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age: 30
  }, {
    name : 'Steven',
    surname: 'Stevenson',
    age: 31
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age: 29
  }]
};
var name = ('Iulia');
var skills = ['html','javascript','css'];
var friends = ['Larry','Steve','Carol'];
  console.log(person.friends);
  console.log('Ma numesc' + ' ' + person.name + ' ' + person.surname + ' ' + 'si stiu ' + skills[0] + ' si ' + skills[2]);
  console.log('Sunt ' + ' ' + name + ' si acum invat JavaScript');
  console.log('Am ' + person.friends.length + ' ' + 'prieteni:'+ friends[0] + ',' + friends[1] +  ' si ' + ' ' +  friends[2]);
