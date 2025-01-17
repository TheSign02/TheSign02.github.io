const helloButton = document.getElementById("hello-button");
const counterP = document.getElementById("counter");

helloButton.addEventListener("click", () => {
  counterP.innerHTML++;
});

setInterval(consoleHello, 1000);

function consoleHello(){
  console.log("hello");
}