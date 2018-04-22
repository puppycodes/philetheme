// Splash //

var shrink = new ScrollMagic.Controller();

var shrinkScene = new ScrollMagic.Scene({
    triggerElement: "#shrinkTrigger",
    triggerHook: 0,
    duration: "100%"
  })
  .setTween("#logo", {scale: 0.3}) // trigger a TweenMax.to tween
  .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
  .addTo(shrink);


  var sticky = new ScrollMagic.Controller();

  var stickyScene = new ScrollMagic.Scene({
      triggerElement: "#stickyTrigger",
      triggerHook: 0,
      offset: -150
    })
    .setPin("#stickyNav")
    .addIndicators({name: "stickyTrigger"}) // add indicators (requires plugin)
    .addTo(sticky);
