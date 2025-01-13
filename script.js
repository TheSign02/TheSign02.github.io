const helloButton = document.getElementById("hello-button");
const counterP = document.getElementById("counter");

helloButton.addEventListener("click", () => {
  alert("Hello, world!");
  counterP.innerHTML++;
});

