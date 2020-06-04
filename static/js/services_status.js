/**
 * Updates the services status box.
 */
function update_services_status() {
    $.getJSON('/services', function (data) {
        let services_status_div = document.getElementById("services-status-box");
        data["services"].forEach(function (service) {
            services_status_div.appendChild(create_service_status(service));
        });
    });
}

/**
 * Gets a status object for a service
 * @param {string} service The services name.
 * @returns {{up: boolean, url: string}}
 */
function service_status(service) {
    return $.post('/service-status', {service}, function (data) {
        return data;
    });
}

/**
 * Creates a status indicator for a given service.
 * @param {string} service_name The
 * @returns {!HTMLElement} the
 */
function create_service_status(service_name) {
    // Add the status service as "waiting status".
    let service_div = document.createElement("a");
    service_div.classList.add("service-wrap");
    let service_status_bar = document.createElement("div");
    service_status_bar.classList.add("service-status-bar");
    service_div.appendChild(service_status_bar);
    let service_status_icon = "/static/images/" + service_name + "_icon.svg";
    let service_name_div = document.createElement("img");
    service_name_div.classList.add("service-icon");
    service_name_div.setAttribute("src", service_status_icon);
    service_div.appendChild(service_name_div);

    // Get actual status and update the status indicator with the result.
    service_status(service_name).then(function (status) {
            service_div.setAttribute("href", status["url"]);
            service_div.setAttribute("target", "_blank");
            service_div.classList.add("service-active");
            let service_status_line;

            if (status["up"]) {
                service_div.classList.add("service-up");
                service_status_line = service_name + " is up";
            } else {
                service_div.classList.add("service-down");
                service_status_line = service_name + " is down";
            }
            service_name_div.setAttribute("alt", service_status_line);
        }
    );
    return service_div
}

update_services_status();
