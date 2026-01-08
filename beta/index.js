var total = document.getElementById("home");
var pager = document.getElementById("pager");

function restartAnimation(el) {
  // removes animation so it can be replayed
  el.classList.remove("animate-left", "animate-right");
  // force reflow (restarts animation reliably)
  void el.offsetWidth;
}

function moveHomeLeft() {
  // ensure direction is normal
  total.style.animationDirection = "normal";
  pager.style.animationDirection = "normal";

  restartAnimation(total);
  restartAnimation(pager);

  total.classList.add("animate-left");
  pager.classList.add("animate-right");
}

function moveHomeRight() {
  // reverse the SAME animations, but we must RESTART them
  total.style.animationDirection = "reverse";
  pager.style.animationDirection = "reverse";

  restartAnimation(total);
  restartAnimation(pager);

  // re-add the same animation classes so they replay (now reversed)
  total.classList.add("animate-left");
  pager.classList.add("animate-right");
}
