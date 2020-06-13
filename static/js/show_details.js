
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

function show_all_matches(episode) {
    let episode_number = episode.getAttribute("data-episode-number");
    let episodes_count = episode.getAttribute("data-episodes-count");
    let episodes = $(".episode-number-"+episode_number).not(".best-match");

    // Hide
    if (episodes.css("display") === "flex") {
        episodes.css('display', 'none');
        $(episode).html(`Show all ${episodes_count} torrents`);

    // Show
    } else {
        episodes.css('display', 'flex');
        $(episode).html("Show best match only");
    }

}