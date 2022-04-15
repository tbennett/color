
async function getColors() {
    let url = 'https://x-colors.herokuapp.com/api/random?number=4';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log('my error is: ', error);
    }
}

async function renderColors() {
    const colors = await getColors();
    const color1 = await colors[0].hex;
    const color2 = colors[1].hex;
    const color3 = colors[2].hex;
    const color4 = colors[3].hex;
    let r = document.querySelector(':root');
    r.style.setProperty('--dark', color1);
    r.style.setProperty('--light', color2);
    r.style.setProperty('--mid', color3);
    document.body.style.backgroundColor = color4;

    console.log(colors)
}

renderColors();





