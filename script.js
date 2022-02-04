let gameOver = false;

/**
 * Player class. A player has a name and some points that start out as 0
 */
class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }
}

/**
 * Function to simulate the cpu picking a random choice
 * @returns {string}
 */
function computerPlay() {
  let turn = Math.floor(Math.random() * 3);
  if (turn === 0) {
    return "Rock";
  } else if (turn === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

/**
 * Test if two choices are equal
 * @param strA first string
 * @param strB second string
 * @returns {boolean} true if the strings have the same content, false otherwise
 */
function isEqual(strA, strB) {
  return strA.toLowerCase() === strB.toLowerCase();
}

/**
 * Simulate a round of Rock Paper Scissors
 * @param playerChoice the players choice that they enter through the prompt
 * @param computerChoice the computer choice that is randomly picked
 * @param player an instance of the Player class. This is the human player
 * @param computer an instance of the Player class. This is the cpu
 * @returns {string} the outcome of the
 */
function round(playerChoice, computerChoice, player, computer) {
  if (!gameOver) {
    if ((isEqual(playerChoice, "Rock") && isEqual(computerChoice, "Scissors")) || (isEqual(
        playerChoice, "Paper") && isEqual(computerChoice, "Rock")) || (isEqual(playerChoice,
        "Scissors") && isEqual(computerChoice, "Paper"))) {
      player.points++;
      document.querySelector("#player-score h3").innerText = player.points;
      document.querySelector("p#move").innerText = `You Win. ${playerChoice} beats ${computerChoice}!`;
    } else if (!isEqual(playerChoice, computerChoice)) {
      computer.points++;
      document.querySelector("#computer-score h3").innerText = computer.points;
      document.querySelector("p#move").innerText = `You Lost. ${computerChoice} beats ${playerChoice}!`;
    } else {
      document.querySelector(
          "p#move").innerText = `Tie! You and the Computer both picked ${playerChoice}`;
    }
    // check if either player has won
    if (player.points === 5 || computer.points === 5) {
      gameOver = true;
      const winner = player.points === 5 ? "You" : "Computer";
      const outcome = document.createElement("h2");
      outcome.innerText = winner === "You" ? "You won!" : "You Lost :(";
      document.querySelector(".outcome").appendChild(outcome);
    }
  }
}

const h = new Player("player");
const c = new Player("computer");

// Manipulate DOM
const Rock = document.querySelector("#rock");
const Paper = document.querySelector("#paper");
const Scissors = document.querySelector("#scissors");
const options = [Rock, Paper, Scissors];
for (const option of options) {
  option.addEventListener("click",
      () => console.log(round(`${option.innerHTML}`, computerPlay(), h, c)));
}