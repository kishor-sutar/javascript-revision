/**
🔹 STEP 19 — Debounce & Throttle

(performance patterns used in real apps)

🎯 Why this matters

Without these patterns:

search boxes spam APIs

scroll events freeze pages

resize handlers kill performance

analytics fire 1000 times/sec

Every serious frontend uses debounce or throttle.



🧠 Core Difference
Debounce

👉 “Wait until user stops”

Used for: search input, auto-save

Executes after inactivity

Throttle

👉 “Allow only once per time window”

Used for: scroll, resize

Executes at fixed intervals
 */

function debounce(func, delay) {
  let timer;

  return function (...args) {

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);

  };
}

