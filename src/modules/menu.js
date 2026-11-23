import denimChickenImage from "../images/denim-chicken.jpg";
import liqourBallSandwichImage from "../images/liquor-ball-sandwiches.jpg";
import tunaSandwichImage from "../images/coke-tuna-sandwich.jpg";

class MenuItem {
    constructor(name, price, ingredients, imageSrc) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.imageSrc = imageSrc;
    };
};

function createMenu() {
    const content = document.querySelector("#content");

    const menu = document.createElement("section");
    menu.classList.add("food-menu");
    
    const title = document.createElement("h2");
    title.innerText = "Selections";
    menu.appendChild(title);
    content.appendChild(menu);

    const tunaSandwich = new MenuItem("Drink of Pepsi Max and Tuna Sandwich", 
        18,
        "Albacore tuna, white bread, can of Pepsi Max",
        tunaSandwichImage
    );
    const denimChicken = new MenuItem("Denim Chicken", 
        22,
         "Roasted chicken, Levi 501 jeans",
         denimChickenImage
    );
    const liqourBallSandwich = new MenuItem("Liquor Ball Sandwich", 
        16,
        "White bread, chilled vodka",
        liqourBallSandwichImage
    );
    
    createMenuRow(menu, liqourBallSandwich);
    createMenuRow(menu, tunaSandwich);
    createMenuRow(menu, denimChicken);
}

function createMenuRow(menu, menuItem) {
    const title = document.createElement("p");
    title.classList.add("food-title");
    title.innerText = menuItem.name;

    const price = document.createElement("p");
    price.classList.add("food-price");
    price.innerText = menuItem.price;

    const row = document.createElement("div");
    row.classList.add("food-menu-row");
    row.append(title, price);
    
    const imageContainer = document.createElement("div");
    const content = document.querySelector("#content");
    content.appendChild(imageContainer);

    row.addEventListener("mouseenter", e => {
        const menuImage = document.createElement("img");
        menuImage.classList.add("food-menu-image");
        menuImage.src = menuItem.imageSrc;

        imageContainer.appendChild(menuImage);
    });

    row.addEventListener("mouseleave", e => {
        imageContainer.innerText = "";
    });

    menu.appendChild(row);
}

export { createMenu };