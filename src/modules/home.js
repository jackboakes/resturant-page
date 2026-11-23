function createHome() {
    const content = document.querySelector("#content");

    const home = document.createElement("section");
    home.classList.add("home");

    const info = document.createElement("p");
    info.innerText = "A parody Resturant by Jack Boakes.";
    home.appendChild(info);
    
    content.appendChild(home);
}

export { createHome };