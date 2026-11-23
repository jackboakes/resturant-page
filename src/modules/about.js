function createLocation() {
    const location = document.createElement("div");
    location.classList.add("location");

    const title = document.createElement("h2");
    title.innerText = "Location";

    const address = document.createElement("p");
    address.innerText = "123 Fake St, Woody Creek, Colorado, United States";

    location.append(title, address);

    return location;
}

function createOpeningHours() {
    const openingHours = document.createElement("div");
    openingHours.classList.add("opening-hours");

    const title = document.createElement("h2");
    title.innerHTML = "Opening Hours";

    const weekDays = document.createElement("p");
    weekDays.innerText = "Monday to Friday 6 pm-12 am";

    const saturday = document.createElement("p");
    saturday.innerText = "Saturday 12-3pm, 6 pm-12 am";

    const sunday = document.createElement("p");
    sunday.innerText = "Sunday Closed";

    openingHours.append(title, weekDays, saturday, sunday);

    return openingHours;
}

function createAbout() {
    const content = document.querySelector("#content");

    const about = document.createElement("section");
    about.classList.add("about");

    const location = createLocation();
    const openingHours = createOpeningHours();

    about.append(location, openingHours);

    content.appendChild(about);
}

export { createAbout };