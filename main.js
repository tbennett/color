// basic remote fetch example

document.addEventListener('DOMContentLoaded', init);

function init() {
  fetch("https://www.colr.org/json/colors/random/80")
  .then(response => response.json()) 
  .then(data => {
    let myColors = [];
    data.colors.forEach(item => {
      myColors.push("#" + item.hex);  
    });

    setCSSVariable('--bg', myColors[randomItem(myColors)]);
    setCSSVariable('--dark',myColors[randomItem(myColors)]);
    setCSSVariable('--mid', myColors[randomItem(myColors)]);
    setCSSVariable('--light', myColors[randomItem(myColors)]);

    /*
    let block1 = document.querySelector('.dark');
    let block2 = document.querySelector('.mid');
    let block3 = document.querySelector('.light');

    block1.style.backgroundColor = myColors[3];
    block2.style.backgroundColor = myColors[6];
    block3.style.backgroundColor = myColors[0];
    document.body.style.backgroundColor = myColors[2];
    */

  }).catch(err => {
    console.error('oops', err.message);
  });


}


// getting a CSS variable value
function getCSSVariable(cssPropName) {
  const cssRoot = document.querySelector(':root');
  const cssRootInfo = getComputedStyle(cssRoot);
  const prop = cssRootInfo.getPropertyValue(cssPropName);
  return prop;
}

// setting a CSS variable value
function setCSSVariable(cssPropName, value) {
  const cssRoot = document.querySelector(':root');
  cssRoot.style.setProperty(cssPropName, value);
}

// return a random item from an array
function randomItem(arrayName) {
  return Math.floor(Math.random() * arrayName.length);
}