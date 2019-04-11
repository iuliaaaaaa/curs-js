var button = document.getElementById('clicker');


function clickHander() {
alert('Ai apasat butonul!')
  }
button.addEventListener('click', clickHander);


var removeButton = document.getElementById('elimina');

removeButton.addEventListener('click', function() {
  button.removeEventListener('click', clickHander);
});
