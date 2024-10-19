import "./css/style.css";

import { Tooltip } from "./js/Tooltip";

// TODO: write your code in app.js


const btn = document.querySelector('.btn');
let tooltip;

btn.addEventListener('click', () => {
    if (tooltip) {
        tooltip.removeTooltip();
        tooltip = null;
    } else {
        tooltip = new Tooltip();
        tooltip.showTooltip(btn);
    }
});