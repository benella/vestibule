
function add_show(show) {
    let imdb_id = show.getAttribute("data-imdb-id");
    let imdb_input = document.getElementById("id_imdb_id");
    imdb_input.value = imdb_id;
    document.getElementById("new-show-form").submit();
}

function search_show() {
    let title = document.getElementById("search-term").value;
    let results_div = $("#searchResults");

    if (title.length < 4) {
        results_div.html("");
        return
    }

    $.getJSON('/shows/search/' + title, function(data) {
        let filtered = data["filtered"];
        results_div.html("");

        for(let i = 0; i < filtered.length; i++) {
            let show_data = filtered[i];
            results_div.append(create_formatted_results(show_data))
        }
    });
}

function create_formatted_results(show_data) {
    let subscribe = `<p class="add-show-tag">Add Show</p>`;
    let action_tags = `data-imdb-id="${show_data["imdb_id"]}" onclick="add_show(this)"`;

    if (show_data["subscribed"] === true) {
        subscribe = `<p class="subscribed-tag">Already Subscribed</p>`;
        action_tags = "";
    }

    return `
        <div class="show-wrap" ${action_tags}>
            <img alt="${show_data["title"]}" src="${show_data["full-size cover url"]}" class="show-poster">
            <div class="show-data-wrap">
                <p class="show-title">${show_data["title"]} <span class="bullet">•</span> <span class="show-year">${show_data["year"]}</span></p>
                ${subscribe}
            </div>
        </div>
    `
}