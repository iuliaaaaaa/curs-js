var person = {
  name: 'Iulia',
  surmane: 'Toderascu',
  age: 16,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javascript: true

  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29
    }
  }
};
console.log(person.friends.larry);
console.log(person.skills.javascript);
console.log(person.friends.carol.age);
console.log( 2019-person.friends.larry.age);
console.log( person.friends.steven.name + ' este cu un an mai mare decat ' + person.friends.carol.name);
console.log( 'Prietenul meu ' + person.friends.steven.name   + ' ' +  person.friends.steven.surname + ' are ' + person.friends.steven.age + ' ani');
console.log( 'Prietenii mei sunt: ' + person.friends.steven.name + ',' + person.friends.carol.name  + ' si ' + person.friends.larry.name);
console.log( person.friends.steven.name + person.friends.steven.name.length);
