let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function selectMove(yourMove) {
  const gameResult = document.getElementById("gameResult");
  const gameScore = document.getElementById("gameScore");
  const gameMoves = document.getElementById("gameMoves");

  const randomNumber = Math.random();

  let computerMoves = "";

  if (randomNumber < 1 / 3) {
    computerMoves = "Rock";
  } else if (randomNumber < 2 / 3) {
    computerMoves = "Paper";
  } else {
    computerMoves = "Scissor";
  }

  let result = "";

  if (yourMove === "Rock") {
    if (computerMoves === "Rock") {
      result = "It's a Tie!";
    } else if (computerMoves === "Paper") {
      result = "You Lose!";
    } else if (computerMoves === "Scissor") {
      result = "You Win!";
    }
  } else if (yourMove === "Paper") {
    if (computerMoves === "Rock") {
      result = "You Win!";
    } else if (computerMoves === "Paper") {
      result = "It's a Tie!";
    } else if (computerMoves === "Scissor") {
      result = "You Lose!";
    }
  } else if (yourMove === "Scissor") {
    if (computerMoves === "Rock") {
      result = "You Lose!";
    } else if (computerMoves === "Paper") {
      result = "You Win!";
    } else if (computerMoves === "Scissor") {
      result = "It's a Tie!";
    }
  }
  if (result === "You Win!") {
    score.wins += 1;
  } else if (result === "You Lose!") {
    score.losses += 1;
  } else if (result === "It's a Tie!") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  gameMoves.textContent = `You selected ${yourMove}, while the Computer selected ${computerMoves}`;
  gameResult.textContent = result;
  gameScore.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}

function resetGame() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");

  gameMoves.textContent = `Select your Move!`;
  gameResult.textContent = "Start by selecting your move.";
  gameScore.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}
