const submitButton = document.querySelector("button");
const label = document.querySelector("label + label");
const warming = document.createElement("div");

const handleLogin = () => {
  const password = document.querySelector("#password");

  if (password.value.length < 6) {
    console.log("too short");
    warming.textContent = "Password too short";
    warming.classList.add("warming");
    label.appendChild(warming);
  }
};

submitButton.addEventListener("click", handleLogin);
