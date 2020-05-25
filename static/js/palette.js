
function update_palette() {

    const colorThief = new ColorThief();
    const image = document.getElementById('strip-img');
    const img = new Image();

    img.addEventListener('load', function() {
        // let palette = colorThief.getPalette(img, 3)
        // console.log(palette[0])
        // console.log(palette[1])
        // console.log(palette[2])
        // update_colors(palette[1]);
        update_main_colors(colorThief.getColor(img))
    });

    let imageURL = image.getAttribute("src");
    let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(imageURL);
}

function update_main_colors(main_color) {
    let root = document.documentElement;
    root.style.setProperty(
        '--main-color',
        "rgb(" + main_color[0] + ", " + main_color[1] + ", " + main_color[2] + ")"
    );
}

update_palette()
