var options = [
    {selector: '.class', offset: 200, callback: customCallbackFunc } },
    {selector: '.other-class', offset: 200, callback: function() {
      customCallbackFunc();
    } },
    {selector: '#staggered-test', offset: 50, callback: function(el) {
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
      } },
  ];
  Materialize.scrollFire(options);

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
        