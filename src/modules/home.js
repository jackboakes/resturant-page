function createHome() {
    const content = document.querySelector("#content");

    const home = document.createElement("section");
    home.classList.add("home");

    const info = document.createElement("p");
    info.innerText = "A parody Resturant by Jack Boakes.";
    const recipes = document.createElement("p");
    recipes.innerText = "Recipes inspired from the TV shows: Peep Show, Trailer Park Boys, and It's Always Sunny in Philadelphia.";
    home.append(info, recipes);

    content.appendChild(home);
}

export { createHome };