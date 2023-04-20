// basic remote fetch example

document.addEventListener('DOMContentLoaded', init);

function init() {
  fetch("https://www.colr.org/json/color/random")
  .then(response => response.json()) 
  .then(data => {
    document.body.style.backgroundColor = `#${data.new_color}`;
  }).catch(err => {
    console.error('oops', err.message);
  });
}
