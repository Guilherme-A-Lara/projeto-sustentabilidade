/*fonte do código - https://github.com/Guilherme-A-Lara/smooth-on-JS */
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  console.log(startPosition);
  var startTime = null;

  function animationScroll(currentTime) {
    if (startTime == null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;

    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll); //Duracao do loop
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animationScroll);
}

var first = document.querySelector(".first"); /*busco o elemento com class ="first"*/
first.addEventListener("click", function () {
  smoothScroll(".last", 2000); /*scrolla para o elemento com class="last" em 2s*/
});
var first = document.querySelector(".last"); /*busco o elemento com class ="last"*/
first.addEventListener("click", function () {
  smoothScroll(".first", 1000); /*scrolla para o elemento com class="first" em 1s*/
});