var Light = function(id, color) {
  var number = document.querySelector('.number');

  var elem = document.getElementById(id);
  elem.classList.add('ligh-background');

  var lightElem = document.createElement('div');
  lightElem.classList.add('light');
  lightElem.classList.add(color);
  elem.appendChild(lightElem);

  this.on = function() {
    lightElem.classList.add('on');
    lightElem.classList.remove('on');
  }
  this.off = function() {
    lightElem.classList.add('off');
  }

  var counter = 0;
  setInterval(function() {
    number.innerHTML = counter;
    counter++;
    if (counter < 15) {
      lightElem.classList.add('on');
    } else if (counter > 15 && counter <= 30) {
      lightElem.classList.add('off')
    } else {
      lightElem.classList.add('orange')
    }
    if (counter == 50) {
      counter = 0;
    }
  }, 1000)
}

var greenLight = new Light('light', 'green');
var redLight = new Light('light', 'red');
var orangeLight = new Light('light', 'orange');
