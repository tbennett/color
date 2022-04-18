
// using asyc functions with await promises to fetch
//remote data
async function getColors(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log('my error is: ', error);
    }
}

// using the remotely fetched data to style the page elements
async function renderColors() {
    const light = await getColors('https://x-colors.herokuapp.com/api/random/all?type=light');

    const random = await getColors('https://x-colors.herokuapp.com/api/random');
    const dark = await getColors('https://x-colors.herokuapp.com/api/random/all?type=dark');

    const bg = await getColors('https://x-colors.herokuapp.com/api/random/all?type=light');


    let r = document.querySelector(':root');
    r.style.setProperty('--bg', light.hex);
    r.style.setProperty('--light', light.hex);
    r.style.setProperty('--mid', random.hex);
    r.style.setProperty('--dark', dark.hsl);
    
    document.body.style.backgroundColor = bg.hex;
}

renderColors();





