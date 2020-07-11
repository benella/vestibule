
function update_show_palette(obj) {
    const colorThief = new ColorThief();
    const image = obj
    const img = new Image();

    img.addEventListener('load', function() {
        let main_color = colorThief.getColor(img)
        image.parentElement.style.backgroundColor = "rgb(" + main_color[0] + ", " + main_color[1] + ", " + main_color[2] + ")"
    });

    let imageURL = image.getAttribute("src");
    let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

    img.crossOrigin = 'Anonymous';
    img.src = googleProxyURL + encodeURIComponent(imageURL);
}