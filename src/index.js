import "./styles/styles.css";

//test
import { mainPage } from "./modules/dom/mainPage"
import test_image from "./assets/images/test_image.jpg";

document.body.appendChild(mainPage());

const imageTest = document.createElement("img");
imageTest.src = test_image;

document.body.appendChild(imageTest);
