/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const card = document.getElementById("card");
  const newCardButton = document.getElementById("newCardButton");

  function generateCard() {
    const suits = ["heart", "spade", "diamond", "club"];
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    // Aplica la clase `card` y la clase correspondiente al palo
    card.className = `card ${randomSuit}`;
    card.innerHTML = `
      <div class="top-left">${getSuitSymbol(randomSuit)}</div>
      <div class="center-value">${randomValue}</div> <!-- Valor en el centro -->
      <div class="bottom-right">${getSuitSymbol(randomSuit)}</div>
    `;
  }

  function getSuitSymbol(suit) {
    switch (suit) {
      case "heart":
        return "♥";
      case "spade":
        return "♠";
      case "diamond":
        return "♦";
      case "club":
        return "♣";
    }
  }

  generateCard();
  newCardButton.addEventListener("click", generateCard);
  setInterval(generateCard, 10000);
};
