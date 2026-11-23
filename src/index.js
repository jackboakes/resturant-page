import "./styles.css";

import { createHome } from "./modules/home.js";
import { createMenu } from "./modules/menu.js";
import { createAbout } from "./modules/about.js";


function clearContent() {
    const content = document.querySelector("#content");
    content.textContent = "";
}

clearContent();

createHome();
createMenu();
createAbout();