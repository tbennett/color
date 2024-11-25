/**
 * Fetch color info from a remote API and apply it to the page
 * hsl color easily allows for adjusting only the brightness of a color
 * without changing its hue or saturation.
 *
 * We can also use JS to dynamically get or set CSS custom properties (variables)
 * see main2.js so see an async version of this code.
 */

document.addEventListener("DOMContentLoaded", init);

function init() {
    const seedColor = getRandomHex();
    fetch("https://www.thecolorapi.com/scheme?hex=" + seedColor + "&mode=quad&count=4")
        .then((response) => response.json())
        .then((data) => {
            //store and manpulate some of the color's hsl values to be
            //lighter or darker, then reapply those recalculated values.
            let bgcolor = data.colors[0].hex.value;
            let h1 = data.colors[1].hsl.h;
            let s1 = data.colors[1].hsl.s;
            let l1 = data.colors[1].hsl.l * 0.4; //make the lightness value darker
            let h3 = data.colors[3].hsl.h;
            let s3 = data.colors[3].hsl.s;
            let l3 = data.colors[3].hsl.l * 1.5; //make the lightness value brighter

            document.body.style.backgroundColor = bgcolor;
            setCSSVariable("--light", `hsl(${h3}, ${s3}%, ${l3}%)`);
            setCSSVariable("--mid", data.colors[2].hex.value);
            setCSSVariable("--dark", `hsl(${h1}, ${s1}%, ${l1}%)`);
        })
        .catch((err) => {
            console.error("oops", err.message);
        });
}

/**
 *
 * Utiliy functions
 *
 */

// getting a CSS variable value
function getCSSVariable(cssPropName) {
    const cssRoot = document.querySelector(":root");
    const cssRootInfo = getComputedStyle(cssRoot);
    const prop = cssRootInfo.getPropertyValue(cssPropName);
    return prop;
}

// setting a CSS variable value
function setCSSVariable(cssPropName, value) {
    const cssRoot = document.querySelector(":root");
    cssRoot.style.setProperty(cssPropName, value);
}

function getRandomHex() {
    var letters = "0123456789ABCDEF".split("");
    var color = "";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
