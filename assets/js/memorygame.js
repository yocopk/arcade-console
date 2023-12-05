document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    "🍧",
    "🍧",
    "🎧",
    "🎧",
    "👻",
    "👻",
    "🦷",
    "🦷",
    "🍒",
    "🍒",
    "🍭",
    "🍭",
    "🍀",
    "🍀",
    "💩",
    "💩",
  ];
  let flippedCards = [];
  let matchedCards = [];

  function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function createCard(cardValue) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = cardValue;

    const front = document.createElement("div");
    front.classList.add("front");
    front.textContent = cardValue;

    const back = document.createElement("div");
    back.classList.add("back");

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", flipCard);

    return card;
  }

  function createBoard() {
    const shuffledCards = shuffle(cards);
    const memoryGame = document.querySelector(".memory-game");

    shuffledCards.forEach((cardValue) => {
      const card = createCard(cardValue);
      memoryGame.appendChild(card);
    });
  }

  function flipCard() {
    if (
      flippedCards.length < 2 &&
      !this.classList.contains("matched") &&
      !flippedCards.includes(this)
    ) {
      this.classList.add("flip");
      flippedCards.push(this);

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
      card1.classList.add("matched");
      card2.classList.add("matched");
      matchedCards.push(card1, card2);
    } else {
      card1.classList.remove("flip");
      card2.classList.remove("flip");
    }

    flippedCards = [];

    if (matchedCards.length === cards.length) {
      alert("Congratulazioni! Hai vinto!");
    }
  }

  createBoard();
});

document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.getElementById("reset-btn");
  resetButton.addEventListener("click", resetGame);

  function resetGame() {
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((card) => {
      card.classList.remove("flip", "matched");
    });

    flippedCards = [];
    matchedCards = [];

    createBoard();
  }
});
