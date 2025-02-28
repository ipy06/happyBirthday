const jsConfetti = new JSConfetti();

window.onload = function () {
  jsConfetti.addConfetti()
  var audio = document.querySelector('audio');
  audio.play();
}

