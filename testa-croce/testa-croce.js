const coinIcon = document.getElementById("coin");
const tossBtn = document.getElementById("btn");
const result = document.getElementById("result");
tossBtn.addEventListener("click", () => {
  tossBtn.disabled = true;
  tossCoinFunction();
});

function tossCoinFunction() {
  const randomVal = Math.random();
  const faceCoin = randomVal < 0.5 ? "Testa" : "Croce";
  const imageUrl =
    faceCoin === "Testa" ? "../assets/testa.png" : "../assets/croce.png";

  coinIcon.classList.add("flip");
  setTimeout(() => {
    coinIcon.innerHTML = `<img src="${imageUrl}" alt="${faceCoin}">`;
    coinIcon.classList.remove("flip");
    result.textContent = `${faceCoin}`;
    tossBtn.disabled = false;
  }, 1000);
}
