
function update_services_status() {
    let services_status_div = document.getElementById("services-status-box");

    $.getJSON('/services-status', function(data) {
        let services_status = data["services_status"];
        services_status_div.innerHTML = "";

        for (let service_name in services_status) {
            if (services_status.hasOwnProperty(service_name)) {
                services_status_div.appendChild(add_service_status(service_name, services_status[service_name]));
            }
        }
    });
}

function add_service_status(service_name, service_status) {
    let service_div = document.createElement("a");
    service_div.setAttribute("href", service_status["url"]);
    service_div.setAttribute("target", "_blank");
    service_div.classList.add("service-wrap");

    let service_status_line = "";
    let service_status_icon = "";

    if (service_status["up"]) {
        service_div.classList.add("service-up");
        service_status_line = service_name + " is up";
        service_status_icon = "/static/images/" + service_name + "_up_icon.svg"
    } else {
        service_div.classList.add("service-down");
        service_status_icon = "/static/images/" + service_name + "_down_icon.svg"
    }

    let service_name_div = document.createElement("img");
    service_name_div.classList.add("service-icon");
    service_name_div.setAttribute("src", service_status_icon);
    service_name_div.setAttribute("alt", service_status_line);
    service_div.appendChild(service_name_div);

    return service_div
}

update_services_status();
