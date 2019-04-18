var paragraphElement = document.createElement('p'),
userAgentString = navigator.userAgent,
message = 'Nu stim ce browser folosesti.';

if(userAgentString.indexOf('Chrome') >= 0) {
  message = 'Navighezi folosind Chrome.';
}
 //if (userAgentString.indexOf('InternetExplorer') >= 0) {
//  message = 'Navighezi folosind InternetExplorer.';
if (userAgentString.indexOf('Firefox') >= 0) {
  message = 'Navighezi folosind Firefox.';
 }


paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);

setTimeout(function() {
  paragraphElement.remove();
}, 5000)
