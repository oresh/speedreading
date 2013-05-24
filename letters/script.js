(function($){

/**
 * Randomly generates letters in the .drowing-area 
 *
 */

var letters = {
  property: {
    structure: ['<div class="single">','','</div>'],
    level: 0,
    speed: 100,
    i: 0,
  },
  fn: {
    start: function() {

    },
    draw: function() {
      console.log(letters.property.i);
    },
    stop: function() {

    },
    timer: function() {

    },
    init: function() {
      this.level = $('.difficulty .active').index();
      letters.timer.start();
    },
  },
  timer: {
    start: function() {
      letters.timerId = setInterval(letters.fn.draw(), 100);
    },
    stop: function() {
      clearTimeout(timerId);
    }
  }
}

$(document).ready(function () {
  letters.fn.init();
})

})(jQuery)