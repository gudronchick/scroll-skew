const items = document.querySelectorAll(".item");
let start = pageYOffset;
document.addEventListener("scroll", (e) => {
  setTimeout(() => {
    start = pageYOffset;
  }, 50);
  let distance = (pageYOffset - start) / 10;

  smoothScroll(distance, 300);
});


function smoothScroll(distance, duration) {
  let startTime = null;
  const easeOutQuad = (t, b, c, d) => {
    return c - (-c * (t /= d) * (t - 2) + b);
  };
  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = easeOutQuad(timeElapsed, 0, distance, duration);
    if (run >= 10) run = 10;
    if (run <= -10) run = -10;
    items.forEach((item) => {
      item.style.transform = `skew(${run}deg)`;
    })
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
}