$(document).ready(function() {
  $('button').click(function(event) {

    //code snippet taken from the animate
    // $.fn.extend({
    //   animateCss: function(animationName) {
    //     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    //     $(this).addClass('animated ' + animationName).one(animationEnd, function() {
    //       $(this).removeClass('animated ' + animationName);
    //     });
    //   }
    // });

    $('h1').addClass('rollIn');
    setTimeout(function(){
      $('h1').removeClass('rollIn');
    }, 1000);

  });


});
