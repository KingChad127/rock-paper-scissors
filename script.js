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
  const win = `You win! ${playerChoice} beats ${computerChoice}!`;
  const lose = `You lose! ${computerChoice} beats ${playerChoice}!`;
  const tie = `Tie! ${playerChoice} and ${computerChoice} are the same!`;
  if (
      (isEqual(playerChoice, "Rock") && isEqual(computerChoice, "Scissors")) ||
      (isEqual(playerChoice, "Paper") && isEqual(computerChoice, "Rock")) ||
      (isEqual(playerChoice, "Scissors") && isEqual(computerChoice, "Paper"))
  ) {
    player.points++;
    return win;
  } else if (isEqual(playerChoice, computerChoice)) {
    return tie;
  } else {
    computer.points++;
    return lose;
  }
}

function game() {
  const h = new Player("player");
  const c = new Player("computer");
  for (let i = 0; i < 5; i++) {
    let usrInput = window.prompt("Rock, Paper, or Scissors?");
    usrInput = usrInput[0].toUpperCase() + usrInput.substring(1);
    console.log(round(usrInput, computerPlay(), h, c));
  }
  console.log(`Final Score: You - ${h.points}, Computer - ${c.points}`)
}

game();