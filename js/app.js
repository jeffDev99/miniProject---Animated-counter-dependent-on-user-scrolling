let $ = document;
let benefitsEl = $.querySelector(".benefits");
let numEls = $.querySelectorAll(".num");
let isCounterStart = false
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= benefitsEl.offsetTop) {
    if (!isCounterStart) {
        numEls.forEach(numEl => numCounter(numEl));
        isCounterStart = true
    }
  }
});

function numCounter(e) {
  let numDataTarget = e.dataset.target;
  let counterInterval = setInterval(() => {
    if (e.innerHTML === numDataTarget) {
        clearInterval(counterInterval)
    } else {
      e.innerHTML++;
    }
  }, 5);
}
