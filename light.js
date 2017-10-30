var Light = function(id, color) {
  var clear;
  var elem = document.getElementById(id);
  elem.classList.add('ligh-background');

  var lightElem = document.createElement('div');
  lightElem.classList.add('light');
  lightElem.classList.add(color);
  elem.appendChild(lightElem);

  this.on = function() {
    lightElem.classList.add('on');
  }
  this.off = function() {
    lightElem.classList.remove('on');
    clearInterval(clear)
  }
  this.blink = function() {
    clear = setInterval(function() {
      greenLight.on();
      redLight.on();
      orangeLight.on()
      setTimeout(function() {
        greenLight.off();
        redLight.off();
        orangeLight.off()
      }, 150)
    }, 300)
  }
}

var number = document.querySelector('.number');
var greenLight = new Light('light', 'green');
var redLight = new Light('light', 'red');
var orangeLight = new Light('light', 'caution');

var counter = 0;
setInterval(function() {
  number.innerHTML = counter;
  counter++;
  if (counter >= 2 && counter < 10) {
    greenLight.on();
    redLight.off();
    orangeLight.off()
  } else if (counter >= 10 && counter < 20) {
    redLight.on();
    greenLight.off();
    orangeLight.off()
  } else if (counter >= 20 && counter < 25) {
    orangeLight.on()
    greenLight.off();
    redLight.off();
  } else if (counter >= 25 && counter < 30) {
    greenLight.blink()
    redLight.blink()
    orangeLight.blink()
  } else if (counter == 30) {
    redLight.off();
    greenLight.off();
    orangeLight.off();
    counter = 0;
  }
}, 500)
