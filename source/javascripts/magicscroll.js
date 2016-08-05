$( document ).ready(function() {
    var x = $(".one h1").offset();
    var one = $(".one").width();
    var para = $(".one h1").width();
    var right = one - (x.left + para);
    var twoOffset = $(".two h1").offset();
    var twoLeftOffset = twoOffset.left - one;
    var firstLine = twoLeftOffset + right;
    var leftPos = para + x.left;

    // init controller
    var controller = new ScrollMagic.Controller();

    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
      .to("#enterpriseSlideContainer", 1,   {x: "-75%"})

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "500%"
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addTo(controller);


    var horizontal = new ScrollMagic.Scene({
      offset: 50,
      duration: 300,
     // reverse: false
    })
      // .addIndicators()
      .addTo(controller);
});
