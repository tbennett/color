// below does exactly the same main.js, but uses the newer and better asyc/await
// evolution of promises.

document.addEventListener("DOMContentLoaded", init);

async function init() {
    const seed = getRandomHex();
    let color = await fetch(
        "https://www.thecolorapi.com/scheme?hex=" + seed + "&mode=quad&count=4"
    );
    let res = await color.json();

    try {
        let bgcolor = res.colors[0].hex.value;
        let root = document.documentElement;
        let h1 = res.colors[1].hsl.h;
        let s1 = res.colors[1].hsl.s;
        let l1 = res.colors[1].hsl.l * 0.4;
        let h3 = res.colors[3].hsl.h;
        let s3 = res.colors[3].hsl.s;
        let l3 = res.colors[3].hsl.l * 1.5;
        root.style.setProperty("--light", `hsl(${h3}, ${s3}%, ${l3}%)`);
        root.style.setProperty("--mid", res.colors[2].hex.value);
        root.style.setProperty("--dark", `hsl(${h1}, ${s1}%, ${l1}%)`);

        document.body.style.backgroundColor = bgcolor;
    } catch {
        (err) => console.error("oops", err.message);
    }
}

function getRandomHex() {
    var letters = "0123456789ABCDEF".split("");
    var color = "";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
