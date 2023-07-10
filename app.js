const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const container = document.querySelector(".container");

const choice = ["paper", "scissor", "rock"];
const getComputerChoice = () =>
  choice[Math.floor(Math.random() * choice.length)];

let result, playerChoice;

container.addEventListener("click", (e) => {
  if (e.target.className != "container") {
    const className = e.target.className;
    playerChoice = className;
    // result
    resulted(getComputerChoice());
  }
});

const resulted = (computerChoice) => {
  result =
    playerChoice === computerChoice
      ? "tied"
      : playerChoice == "scissor" && computerChoice == "paper"
      ? "computer's Choice❌, player's Choice ✔☑"
      : playerChoice == "paper" && computerChoice == "scissor"
      ? "Player's Choice ❌ , computer's Choice ✔☑"
      : playerChoice == "paper" && computerChoice == "rock"
      ? "computer's Choice❌, player's Choice ✔☑"
      : playerChoice == "rock" && computerChoice == "paper"
      ? "Player's Choice ❌"
      : "computer's Choice ✔☑";

  const score = document.querySelector(".score");

  let li = document.createElement("li");
  let m = document.createElement("i");
  let b = document.createElement("br");
  m.innerHTML += result;
  li.append(m);
  li.append(b);
  score.append(li);

  //   return result;
};
