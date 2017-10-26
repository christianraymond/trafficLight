var Light = function(id, color) {
  this.on = function(){
       // add the switch the light on logic here
       lightElem.classList.add('on');
      //  lightElem.classList.remove('on');
   };

   this.off = function(){
     lightElem.classList.add('off')
   }

   this.blink = function(){
     lightElem.classList.add('orange')
   }
    //get the target element to render the light into
    var elem = document.getElementById(id);
    elem.classList.add('light-background');

    //append a div into the target element
    var lightElem = document.createElement('div');
    lightElem.classList.add('light');
    lightElem.classList.add(color);
    elem.appendChild(lightElem);

}
// Valid colors for the light are red, green, orange. You can add more colors by adding classes in the css file
var light = new Light('light', 'green');
light.on();
setTimeout(function(){
    light.off();
}, 1000);


var light = new Light('light', 'red');
light.off()
setTimeout(function(){
  light.on();
}, 1000)

var light = new Light('light', 'orange');
light.blink()
// var blueLight = new Light('lightOne', 'blue');
