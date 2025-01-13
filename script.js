const helloButton = document.getElementById("hello-button");
const counterP = document.getElementById("counter");

helloButton.addEventListener("click", () => {
  counterP.innerHTML **= 2;
});

