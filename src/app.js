import MainController from "./controllers/MainController.js";
import "./main.css";

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});

console.log(process.env.NODE_ENV)