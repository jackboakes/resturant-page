import "./styles.css";

import { createHome } from "./modules/home.js";
import { createMenu } from "./modules/menu.js";
import { createAbout } from "./modules/about.js";

const NAV_HOME = 0;
const NAV_MENU = 1;
const NAV_ABOUT = 2;
let NAV_STATE = NAV_HOME;


function clearContent() {
    const content = document.querySelector("#content");
    content.textContent = "";
}

function pageLoad() {
    createHome();

    const homeButton = document.querySelector("#home");
    homeButton.addEventListener("click", e => {
        if(NAV_STATE !== NAV_HOME) {
            clearContent();
            createHome();
            NAV_STATE = NAV_HOME;
        }
    });

    const menuButton = document.querySelector("#menu");
    menuButton.addEventListener("click", e => {
        if(NAV_STATE !== NAV_MENU) {
            clearContent();
            createMenu();
            NAV_STATE = NAV_MENU;
        }
    });

    const aboutButton = document.querySelector("#about");
    aboutButton.addEventListener("click", e => {
        if(NAV_STATE !== NAV_ABOUT) {
            clearContent();
            createAbout();
            NAV_STATE = NAV_ABOUT;
        }
    });
}

pageLoad();