
let subscribed_tag = document.createElement("p");
subscribed_tag.innerText = "Subscribed";
subscribed_tag.classList.add("subscribed-tag");
subscribed_tag.classList.add("tag");

function add_show(show) {
    let imdb_id = show.getAttribute("imdb_id");
    let imdb_input = document.getElementById("id_imdb_id");
    imdb_input.value = imdb_id;
    document.getElementById("new-show-form").submit();
}

function search_show() {
    let title = document.getElementById("search-term").value;
    let results = document.getElementById("searchResults");

    if (title.length < 4) {
        results.innerHTML = "";
        return
    }

    $.getJSON('/shows/search/' + title, function(data) {
        let filtered = data["filtered"];
        results.innerHTML = "";

        for(let i = 0; i < filtered.length; i++) {
            let show_data = filtered[i];
            results.appendChild(create_formated_results(show_data));
        }
    });
}

function create_formated_results(show_data) {
    let show_div = document.createElement("div");
    show_div.classList.add("show-wrap");

    let show_data_div = document.createElement("div");
    show_data_div.classList.add("show-data-wrap");

    let show_poster = document.createElement("img");
    show_poster.src = show_data["full-size cover url"];
    show_poster.classList.add("show-poster");
    show_div.appendChild(show_poster);

    let show_title = document.createElement("p");
    show_title.innerText = show_data["title"];
    show_title.classList.add("show-title");
    show_data_div.appendChild(show_title);

    let show_year = document.createElement("p");
    show_year.innerText = show_data["year"];
    show_year.classList.add("show-year");
    show_data_div.appendChild(show_year);

    if (show_data["subscribed"] === true) {
        show_data_div.appendChild(subscribed_tag);

    } else {
        let add_show_tag = document.createElement("p");
        add_show_tag.innerText = "+ Add Show";
        add_show_tag.classList.add("add-show-tag");
        add_show_tag.classList.add("tag");
        add_show_tag.setAttribute("imdb_id", show_data["imdb_id"]);
        add_show_tag.setAttribute("onclick", "add_show(this)");
        show_data_div.appendChild(add_show_tag);
    }

    show_div.appendChild(show_data_div);
    return show_div
}