$(function() {
  'use strict';

  var threshold1 = $('#slide1').offset().top + $('#slide1').height() / 2;
  var threshold2 = $('#slide2').offset().top + $('#slide2').height() / 2;
  var threshold3 = $('#slide3').offset().top + $('#slide3').height() / 2;
  var threshold4 = $('#slide4').offset().top + $('#slide4').height() / 2;

  var resetThresholds = function() {
    threshold1 = $('#slide1').offset().top + $('#slide1').height() / 2;
    threshold2 = $('#slide2').offset().top + $('#slide2').height() / 2;
    threshold3 = $('#slide3').offset().top + $('#slide3').height() / 2;
    threshold4 = $('#slide4').offset().top + $('#slide4').height() / 2;
  };

  var resizeTimer;

  //'Debounce' resize event
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      resetThresholds();
      $('body').scrollTop(0);
    }, 100);
  });

});
