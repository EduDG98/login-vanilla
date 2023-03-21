import { handleUrlChange } from "./handleUrlChange";

const button = document.querySelector("button");

const handleLogout = () => {
  window.location.replace("./index.html");
};

button.addEventListener("click", handleLogout);
// window.addEventListener("popstate", handleUrlChange);
// button.addEventListener("click", handleUrlChange);
