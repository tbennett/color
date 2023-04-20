// below does exactly the same main.js, but uses the newer and better asyc/await
// evolution of promises.

document.addEventListener('DOMContentLoaded', init);

async function init() {
  let color = await fetch("https://www.colr.org/json/color/random");
  let res = await color.json();
  try {
    document.body.style.backgroundColor = `#${await res.new_color}`;
  } catch {
    err => console.error('oops', err.message);
  }
}