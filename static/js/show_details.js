
function choose_season(season) {
    let season_number = season.getAttribute("data-season-number");
    $(".season-bar").removeClass("chosen-season");
    season.classList.add("chosen-season");

    $(".season-torrents").removeClass("chosen-season-torrents");
    $("#torrents-season-" + season_number).addClass("chosen-season-torrents");
}

function toggle_options() {
    $("#profile-options").toggle();
}