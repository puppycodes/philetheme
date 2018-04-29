// Splash //

var shrink = new ScrollMagic.Controller();

var shrinkScene = new ScrollMagic.Scene({
    triggerElement: "#shrinkTrigger",
    triggerHook: 0,
    duration: "100%"
  })
  .setTween("#logo", {scale: 0.3})
  .addIndicators({name: "shrinkTrigger"})
  .addTo(shrink);


  var sticky = new ScrollMagic.Controller();

  var stickyScene = new ScrollMagic.Scene({
      triggerElement: "#stickyTrigger",
      triggerHook: 0
    })
    .setClassToggle("#stickyNav", "stick")
    .addIndicators({name: "stickyTrigger"})
    .addTo(sticky);

    var hideLogo = new ScrollMagic.Controller();

    var hideLogoScene = new ScrollMagic.Scene({
        triggerElement: "#hideLogo",
        triggerHook: 0
      })
      .setClassToggle("#logo", "hideLogo")
      .addIndicators({name: "hideLogo"})
      .addTo(hideLogo);
