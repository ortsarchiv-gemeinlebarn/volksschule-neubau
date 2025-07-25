/**
 * Preloading
 */

const application = document.getElementById("application");
const preloadTracker = {
    application: false,
    hero: false,
};

const preloadHandler = () => {
    if (preloadTracker.application && preloadTracker.hero)
        document.body.classList.add("loaded");
};

application?.addEventListener("loaded", () => {
    console.log("[OAG VS Neubau]", "Application loaded");
    preloadTracker.application = true;
    preloadHandler();
});

const heroPreload = new Image();
heroPreload.src =
    "https://data.ortsarchiv-gemeinlebarn.org/volksschule-neubau/album/large/Foto_00001.jpg";
heroPreload.addEventListener("load", () => {
    console.log("[OAG VS Neubau]", "Hero Image loaded");
    preloadTracker.hero = true;
    preloadHandler();
});

/**
 * Components
 */

import { defineCustomElements } from "@ortsarchiv-gemeinlebarn/components/dist/components/index.js";
defineCustomElements();

window.openCockpit = () =>
    document
        .getElementsByTagName("oag-cockpit")[0]
        .setAttribute("visible", "true");
window.openScreenMap = () =>
    document
        .getElementsByTagName("oag-screen-map")[0]
        .setAttribute("visible", "true");
