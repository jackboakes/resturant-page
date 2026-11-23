import "./styles.css";

import { createMenu } from "./modules/menu.js";

function clearContent() {
    const content = document.querySelector("#content");
    content.textContent = "";
}

clearContent();

createMenu();