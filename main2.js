
// using asyc functions with await promises to fetch
//remote data
async function getJson(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log('my error is: ', error);
    }
}

// using the remotely fetched data to style the page elements
async function renderColors() {
    const data = await getJson('https://www.colr.org/json/colors/random/5');
    console.log(data.colors);
    let r = document.querySelector(':root');
    r.style.setProperty('--light', `#${data.colors[0].hex}`);
    r.style.setProperty('--mid', `#${data.colors[1].hex}`);
    r.style.setProperty('--dark', `#${data.colors[2].hex}`);
    r.style.setProperty('--bg', `#${data.colors[3].hex}`);

    document.body.style.backgroundColor = `#${data.colors[4].hex}`
}

renderColors();





