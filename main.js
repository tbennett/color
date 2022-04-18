
// basic remote fetch example
fetch("https://x-colors.herokuapp.com/api/random")
  .then(response => response.json()) 
  .then(data => {
    document.body.style.backgroundColor = data.hex;
  }).catch(err => {
    console.error('oops', err.message);
  });