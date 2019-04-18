(function() {
  document.addEventListener('DOMContentLoaded', function() {
      var stage = document.querySelector('.stage');

      stage.addEventListener('mouseover', function() {
        //console.log
        log('Mouseul este pe scena');
      });

      stage.addEventListener('mouseout', function() {
      //  console.log
      log('Mouseul nu este pe scena');
      });

      function log(msg) {
        var paragraphElement = document.createElement('p');
        paragraphElement.innerText = msg;
        paragraphElement.classList.add('message');
        document.body.appendChild(paragraphElement);
      }

  });
})();
