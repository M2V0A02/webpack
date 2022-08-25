import {Unit} from "./unit";
import {createAnalytics} from "./analytics";
import "../css/style.css";
window.analytics = createAnalytics()
let test = new Unit("peasant", 120, 80, 60, 20, 20, 10, 5, 20, 20);
content.innerHTML = test.toString();