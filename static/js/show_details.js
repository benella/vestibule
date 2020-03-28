
function find_torrents(slug) {
    let torrents_div = document.getElementById("torrents-results");

    $.getJSON('/shows/find_torrents/' + slug, function(data) {
        let results = data["results"];
        console.log(results);
        torrents_div.innerHTML = "";

        for (let key in results) {
            if (results.hasOwnProperty(key)) {
                for(let i = 0; i < results[key].length; i++) {
                    let torrent_data = results[key][i];
                    torrents_div.appendChild(create_formatted_results(key, torrent_data));
                }
            }
        }

        if (torrents_div.innerText === "") {
            torrents_div.innerText = "No torrents found"
        }
    });
}

function create_formatted_results(feed_name, torrent_data) {
    let torrent_div = document.createElement("div");
    torrent_div.classList.add("torrent-wrap");

    let feed_tag = document.createElement("p");
    feed_tag.classList.add("feed-tag");
    feed_tag.innerText = feed_name;
    torrent_div.appendChild(feed_tag);

    let torrent_title = document.createElement("a");
    torrent_title.classList.add("torrent-title");
    torrent_title.innerText = torrent_data["title"];
    torrent_title.setAttribute("href", torrent_data["link"]);
    torrent_div.appendChild(torrent_title);

    return torrent_div
}
