import "./styles.css";

class MenuItem {
    constructor(name, price, ingredients, image) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.image = image;
    }
};

function createMenu() {
    const tunaSandwich = new MenuItem("Drink of Pepsi Max and Tuna Sandwich", 
        18,
        "Albacore tuna, white bread, can of Pepsi Max",
        "./src/images/coke-tuna-sandwich.jpg"
    );
    const denimChicken = new MenuItem("Denim Chicken", 
        22,
         "Roasted chicken, Levi 501 jeans",
         "./src/images/denim-chicken.jpg"
    );
    const liqourBallSandwich = new MenuItem("Liquor Ball Sandwich", 
        16,
        "White bread, chilled vodka",
        "./src/images/liquor-ball-sandwiches.jpg"
    );

    const menu = document.querySelector(".food-menu");
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

    menu.appendChild(row);
}

createMenu();

