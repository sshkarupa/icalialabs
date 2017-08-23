$(document).ready(function() {
  var quotientTest = readCookie("quotient-test");
  if (!quotientTest) {
    var samples = ["a", "b"];
    var sample = samples[Math.floor(Math.random()*samples.length)];
    createCookie("quotient-test", sample, 45)
  }
})

$("a[data-label^='quote']:not([data-label$='es'])").on('click', function() {
  var quotientTest = readCookie("quotient-test");
  if (quotientTest === "b") {
    var win = window.open("http://quotient.icalialabs.com", '_blank');
    win.focus();
    return false
  }
});

$("a[data-label]").on("click", function(){
  var quotientTest = readCookie("quotient-test");
  if ($(this).data('label').indexOf("quote") !== -1) {
    if (quotientTest === "b") {
      ga("send", "event", "A/B Test", "Sent to Quotient");
    } else {
      ga("send", "event", "A/B Test", "Sent to Typeform");
    }
  }
})
