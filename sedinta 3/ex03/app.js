var dragos = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {}

};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {}
};

 var carol = {
   name: 'Carolson',
   friends:{}
 };
 var steven = {
   name: 'Steven',
   surname: 'Stevenson',
   friends:{}
 };
 var anita = {
   name: 'Andra',
   surname: 'Andrason',
   friends: {}
};

dragos.friends.larry = larry;
dragos.friends.steven = steven;
dragos.friends.anita = anita;

console.log(dragos);
// console.log(dragos.friends);

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
anita.friends.dragos = dragos;

// console.log(dragos.friends);

larry.friends.steven = steven;
anita.friends.steven = steven;

steven.friends.larry = larry;
steven.friends.anita = anita;
//steven,anita
carol.friends.anita = anita;
anita.friends.carol = carol;
//carol,anita & anita,carol;
delete larry.friends.dragos;
delete dragos.friends.larry;
console.log(larry.friends.steven.friends.dragos.name);
